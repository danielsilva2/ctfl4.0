
import React from 'react';
import { CHAPTER_LABELS } from '../constants';
import { GraduationCap, Play, BarChart3, BookOpen } from 'lucide-react';

interface HomeProps {
  onStartQuiz: (chapterKey: string) => void;
  onViewDashboard: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartQuiz, onViewDashboard }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-blue-600 text-white rounded-2xl mb-4 shadow-lg shadow-blue-200">
          <GraduationCap size={48} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Simulado ISTQB CTFL 4.0</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Prepare-se para a certificação Foundation Level com questões atualizadas, 
          módulos por capítulo e simulados finais de 40 questões.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <button 
          onClick={() => onStartQuiz('simulado')}
          className="group relative bg-blue-700 text-white p-8 rounded-2xl shadow-xl hover:bg-blue-800 transition-all flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Play size={120} />
          </div>
          <Play size={40} className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Simulado Final</h2>
          <p className="text-blue-100 opacity-90">40 questões aleatórias • 60 minutos • 65% para aprovação</p>
        </button>

        <button 
          onClick={onViewDashboard}
          className="group relative bg-white border-2 border-slate-200 text-slate-800 p-8 rounded-2xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform text-slate-900">
            <BarChart3 size={120} />
          </div>
          <BarChart3 size={40} className="mb-4 text-blue-600" />
          <h2 className="text-2xl font-bold mb-2">Seu Desempenho</h2>
          <p className="text-slate-500">Analise seu progresso por capítulo e médias de tempo</p>
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-6 text-slate-900">
          <BookOpen size={24} className="text-blue-600" />
          <h2 className="text-xl font-bold">Treinamento por Capítulo</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(CHAPTER_LABELS).filter(([k]) => k !== 'simulado').map(([key, label]) => (
            <button
              key={key}
              onClick={() => onStartQuiz(key)}
              className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-left group"
            >
              <span className="text-sm font-semibold text-blue-600 mb-1 block uppercase tracking-wider">Módulo</span>
              <p className="text-slate-900 font-medium leading-tight group-hover:text-blue-700">{label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
