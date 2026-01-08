
import { UserStats, ChapterStats, HistoryEntry } from '../types';
// Fixed: APP_ID and USER_ID are constants defined in constants.ts, not types.
import { APP_ID, USER_ID } from '../constants';

/**
 * PATH: /artifacts/{appId}/users/{userId}/summary/stats
 */
const STORAGE_KEY = `artifacts/${APP_ID}/users/${USER_ID}/summary/stats`;

const initialChapterStats = (): ChapterStats => ({
  attempts: 0,
  bestScore: 0,
  avgTime: 0,
  history: []
});

const defaultStats: UserStats = {
  chap_1: initialChapterStats(),
  chap_2: initialChapterStats(),
  chap_3: initialChapterStats(),
  chap_4: initialChapterStats(),
  chap_5: initialChapterStats(),
  chap_6: initialChapterStats(),
  simulado: initialChapterStats()
};

export const storageService = {
  getStats: (): UserStats => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return defaultStats;
    try {
      return JSON.parse(data);
    } catch (e) {
      return defaultStats;
    }
  },

  saveStats: (stats: UserStats): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  },

  updateChapterStats: (chapterKey: string, score: number, timeInSeconds: number): UserStats => {
    const stats = storageService.getStats();
    const chapter = stats[chapterKey] || initialChapterStats();

    const newHistory: HistoryEntry = {
      date: new Date().toISOString(),
      score: score
    };

    const updatedChapter: ChapterStats = {
      attempts: chapter.attempts + 1,
      bestScore: Math.max(chapter.bestScore, score),
      avgTime: chapter.attempts === 0 
        ? timeInSeconds 
        : Math.round(((chapter.avgTime * chapter.attempts) + timeInSeconds) / (chapter.attempts + 1)),
      history: [...chapter.history, newHistory].slice(-10) // Keep last 10
    };

    const newStats = {
      ...stats,
      [chapterKey]: updatedChapter
    };

    storageService.saveStats(newStats);
    return newStats;
  }
};