
import React from 'react';
import { UserStats } from '../types';
// Fixed: CHAPTER_LABELS is a constant defined in constants.ts, not a type.
import { CHAPTER_LABELS } from '../constants';
import { storageService } from '../services/storageService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowLeft, Trophy, Clock, Target, AlertCircle } from 'lucide-react';

interface DashboardProps {
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  const stats = storageService.getStats();
  
  const chartData = Object.entries(stats).map(([key, value]) => ({
    name: key === 'simulado' ? 'Simulado' : key.replace('chap_', 'C'),
    score: value.bestScore,
    attempts: value.attempts,
    fullName: CHAPTER_LABELS[key]
  }));

  const totalAttempts = Object.values(stats).reduce((acc, curr) => acc + curr.attempts, 0);
  const overallBest = Math.max(...Object.values(stats).map(s => s.bestScore));

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8 font-medium transition-colors"
      >
        <ArrowLeft size={20} />
        Voltar para o Menu
      </button>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Painel de Evolução</h1>
          <p className="text-slate-500">Acompanhe seu progresso e identifique áreas de melhoria.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Target size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Tentativas</p>
              <p className="text-2xl font-bold text-slate-900">{totalAttempts}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Melhor Nota</p>
              <p className="text-2xl font-bold text-slate-900">{overallBest}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 mb-10">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Melhor Pontuação por Módulo (%)</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
              />
              <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.score >= 65 ? '#10b981' : '#3b82f6'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">Tabela Analítica</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Nome do Módulo</th>
                <th className="px-6 py-4">Melhor Nota</th>
                <th className="px-6 py-4">Média de Tempo</th>
                <th className="px-6 py-4">Tentativas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {Object.entries(stats).map(([key, data]) => (
                <tr key={key} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">{CHAPTER_LABELS[key]}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      data.bestScore >= 65 ? 'bg-emerald-100 text-emerald-700' : 
                      data.attempts > 0 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {data.attempts > 0 ? `${data.bestScore}%` : 'N/A'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 flex items-center gap-2">
                    <Clock size={16} />
                    {data.attempts > 0 ? `${Math.floor(data.avgTime / 60)}m ${data.avgTime % 60}s` : '--'}
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-mono">{data.attempts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;