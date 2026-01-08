
import React, { useState } from 'react';
import { ViewState, QuizResult } from './types';
import { storageService } from './services/storageService';
import Home from './components/Home';
import QuizRoom from './components/QuizRoom';
import Dashboard from './components/Dashboard';
import Results from './components/Results';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [activeChapter, setActiveChapter] = useState<string>('');
  const [lastResult, setLastResult] = useState<QuizResult | null>(null);

  const startQuiz = (chapterKey: string) => {
    setActiveChapter(chapterKey);
    setView('QUIZ');
  };

  const finishQuiz = (result: QuizResult) => {
    storageService.updateChapterStats(result.chapterKey, result.score, result.timeSpent);
    setLastResult(result);
    setView('RESULTS');
  };

  const restartQuiz = () => {
    if (lastResult) {
      setView('QUIZ');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 transition-all duration-500">
      {/* Navbar Simple */}
      <nav className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div 
            onClick={() => setView('HOME')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900">CTFL 4.0</span>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => setView('DASHBOARD')}
              className="text-slate-500 hover:text-blue-600 font-bold transition-colors"
            >
              Progresso
            </button>
          </div>
        </div>
      </nav>

      <main className="pb-20">
        {view === 'HOME' && (
          <Home 
            onStartQuiz={startQuiz} 
            onViewDashboard={() => setView('DASHBOARD')} 
          />
        )}
        
        {view === 'QUIZ' && activeChapter && (
          <QuizRoom 
            chapterKey={activeChapter} 
            onFinish={finishQuiz} 
            onCancel={() => setView('HOME')} 
          />
        )}

        {view === 'DASHBOARD' && (
          <Dashboard onBack={() => setView('HOME')} />
        )}

        {view === 'RESULTS' && lastResult && (
          <Results 
            result={lastResult} 
            onRestart={restartQuiz} 
            onGoHome={() => setView('HOME')}
            onViewDashboard={() => setView('DASHBOARD')}
          />
        )}
      </main>
      
      {/* Footer Branding */}
      <footer className="py-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Simulado Preparatório Profissional CTFL 4.0</p>
        <p className="mt-1">Baseado no Syllabus ISTQB Versão 4.0</p>
      </footer>
    </div>
  );
};

export default App;
