
import React, { useState, useEffect, useMemo } from 'react';
import { Question, PreparedQuestion, QuizResult } from '../types';
import { QUESTIONS_DB, PASS_SCORE_PERCENT, CHAPTER_LABELS } from '../constants';
import { CheckCircle2, XCircle, ChevronRight, Clock, Info } from 'lucide-react';

interface QuizRoomProps {
  chapterKey: string;
  onFinish: (result: QuizResult) => void;
  onCancel: () => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const QuizRoom: React.FC<QuizRoomProps> = ({ chapterKey, onFinish, onCancel }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showExpl, setShowExpl] = useState(false);
  const [startTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour for simulator

  const preparedQuestions: PreparedQuestion[] = useMemo(() => {
    let base: Question[] = [];
    if (chapterKey === 'simulado') {
      base = shuffleArray(QUESTIONS_DB).slice(0, 40);
    } else {
      const chapterNum = parseInt(chapterKey.replace('chap_', ''));
      base = shuffleArray(QUESTIONS_DB.filter(q => q.chapter === chapterNum));
    }

    return base.map(q => {
      const originalCorrectText = q.a[q.correct];
      const shuffledOptions = shuffleArray(q.a);
      const newCorrectIndex = shuffledOptions.indexOf(originalCorrectText);
      return {
        id: q.id,
        chapter: q.chapter,
        question: q.q,
        options: shuffledOptions,
        correctIndex: newCorrectIndex,
        explanation: q.expl
      };
    });
  }, [chapterKey]);

  useEffect(() => {
    if (answers.length === 0) {
      setAnswers(new Array(preparedQuestions.length).fill(null));
    }
  }, [preparedQuestions, answers.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (idx: number) => {
    if (showExpl) return;
    const newAnswers = [...answers];
    newAnswers[currentIdx] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIdx < preparedQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowExpl(false);
    } else {
      const correctCount = answers.reduce((acc, ans, i) => 
        ans === preparedQuestions[i].correctIndex ? acc! + 1 : acc, 0
      ) || 0;
      
      const scorePercent = Math.round((correctCount / preparedQuestions.length) * 100);
      const timeSpent = Math.round((Date.now() - startTime) / 1000);

      onFinish({
        score: scorePercent,
        totalQuestions: preparedQuestions.length,
        timeSpent,
        chapterKey,
        isPass: scorePercent >= PASS_SCORE_PERCENT
      });
    }
  };

  const currentQuestion = preparedQuestions[currentIdx];
  const progress = ((currentIdx + 1) / preparedQuestions.length) * 100;
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentQuestion) return null;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{CHAPTER_LABELS[chapterKey]}</h2>
          <p className="text-slate-500 font-medium">Questão {currentIdx + 1} de {preparedQuestions.length}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-slate-700 font-mono">
            <Clock size={18} />
            {formatTime(timeLeft)}
          </div>
          <button 
            onClick={onCancel}
            className="text-slate-400 hover:text-red-500 transition-colors font-medium"
          >
            Encerrar
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 rounded-full mb-10 overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200 border border-slate-100 mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-8 leading-snug">
          {currentQuestion.question}
        </h3>

        <div className="space-y-4">
          {currentQuestion.options.map((opt, i) => {
            const isSelected = answers[currentIdx] === i;
            const isCorrect = i === currentQuestion.correctIndex;
            const showCorrect = showExpl && isCorrect;
            const showWrong = showExpl && isSelected && !isCorrect;

            let bgColor = "bg-slate-50 border-slate-200 hover:border-blue-300 hover:bg-blue-50";
            if (isSelected && !showExpl) bgColor = "bg-blue-600 border-blue-600 text-white";
            if (showCorrect) bgColor = "bg-emerald-50 border-emerald-500 text-emerald-800";
            if (showWrong) bgColor = "bg-rose-50 border-rose-500 text-rose-800";

            return (
              <button
                key={i}
                disabled={showExpl}
                onClick={() => handleSelect(i)}
                className={`w-full p-5 rounded-2xl border-2 transition-all flex items-start gap-4 text-left group ${bgColor}`}
              >
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold
                  ${isSelected && !showExpl ? 'border-white bg-white/20' : 'border-slate-300 group-hover:border-blue-400'}
                  ${showCorrect ? 'bg-emerald-500 border-emerald-500 text-white' : ''}
                  ${showWrong ? 'bg-rose-500 border-rose-500 text-white' : ''}
                `}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-lg font-medium pt-0.5">{opt}</span>
                {showCorrect && <CheckCircle2 className="ml-auto text-emerald-600 flex-shrink-0" />}
                {showWrong && <XCircle className="ml-auto text-rose-600 flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation & Footer */}
      {showExpl && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
            <Info size={20} />
            Justificativa Técnica
          </div>
          <p className="text-amber-900 leading-relaxed">{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="flex justify-between items-center">
        {!showExpl ? (
          <button
            disabled={answers[currentIdx] === null}
            onClick={() => setShowExpl(true)}
            className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Verificar Resposta
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="ml-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            {currentIdx === preparedQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizRoom;
