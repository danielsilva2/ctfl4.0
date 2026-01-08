
import React from 'react';
import { QuizResult } from '../types';
// Fixed: CHAPTER_LABELS is a constant defined in constants.ts, not a type.
import { CHAPTER_LABELS } from '../constants';
import { Trophy, XCircle, Home, BarChart3, RotateCcw } from 'lucide-react';

interface ResultsProps {
  result: QuizResult;
  onRestart: () => void;
  onGoHome: () => void;
  onViewDashboard: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, onRestart, onGoHome, onViewDashboard }) => {
  const { score, isPass, totalQuestions, timeSpent, chapterKey } = result;

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-center">
      <div className={`inline-flex items-center justify-center p-6 rounded-3xl mb-8 shadow-2xl ${
        isPass ? 'bg-emerald-100 text-emerald-600 shadow-emerald-200' : 'bg-rose-100 text-rose-600 shadow-rose-200'
      }`}>
        {isPass ? <Trophy size={80} /> : <XCircle size={80} />}
      </div>

      <h1 className="text-4xl font-black text-slate-900 mb-2">
        {isPass ? 'Parabéns! Você Passou 🥳' : 'Não foi dessa vez... 😕'}
      </h1>
      <p className="text-slate-500 text-xl mb-10">
        Você obteve <span className={`font-bold ${isPass ? 'text-emerald-600' : 'text-rose-600'}`}>{score}%</span> de acerto no {CHAPTER_LABELS[chapterKey]}.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-bold uppercase mb-1">Questões</p>
          <p className="text-2xl font-black text-slate-800">
            {Math.round((score/100) * totalQuestions)} / {totalQuestions}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-bold uppercase mb-1">Tempo Total</p>
          <p className="text-2xl font-black text-slate-800">
            {Math.floor(timeSpent / 60)}m {timeSpent % 60}s
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all"
        >
          <RotateCcw size={20} />
          Refazer Simulado
        </button>
        <button
          onClick={onViewDashboard}
          className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 rounded-2xl font-bold hover:border-blue-400 hover:text-blue-600 transition-all"
        >
          <BarChart3 size={20} />
          Ver Estatísticas
        </button>
        <button
          onClick={onGoHome}
          className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 rounded-2xl font-bold hover:border-slate-400 transition-all"
        >
          <Home size={20} />
          Menu Principal
        </button>
      </div>
    </div>
  );
};

export default Results;