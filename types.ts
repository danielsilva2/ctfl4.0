
export interface Question {
  id: string;
  chapter: number;
  q: string;
  a: string[];
  correct: number;
  expl: string;
}

export interface PreparedQuestion {
  id: string;
  chapter: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface HistoryEntry {
  date: string;
  score: number;
}

export interface ChapterStats {
  attempts: number;
  bestScore: number;
  avgTime: number;
  history: HistoryEntry[];
}

export interface UserStats {
  [key: string]: ChapterStats;
}

export type ViewState = 'HOME' | 'QUIZ' | 'DASHBOARD' | 'RESULTS';

export interface QuizResult {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  chapterKey: string;
  isPass: boolean;
}
