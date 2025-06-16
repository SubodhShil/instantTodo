import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePomodoroStore = create(
  persist(
    (set) => ({
      // Timer state
      timeRemaining: 1500, // seconds
      timerType: 'WORK', // WORK, SHORT_BREAK, LONG_BREAK
      isRunning: false,
      isPaused: false,
      
      // Session tracking
      totalPauseTime: 0,
      currentPauseStart: null,
      completedSessions: 0,
      
      // Settings
      workDuration: 1500,
      shortBreakDuration: 300,
      longBreakDuration: 900,
      autoStartBreaks: false,
      soundEnabled: true,
      
      // Actions
      startTimer: () => set((state) => {
        let pauseToAdd = 0;
        if (state.isPaused && state.currentPauseStart) {
          pauseToAdd = (Date.now() - state.currentPauseStart) / 1000;
        }
        return { 
          isRunning: true, 
          isPaused: false,
          totalPauseTime: state.totalPauseTime + pauseToAdd,
          currentPauseStart: null
        };
      }),
      pauseTimer: () => set((state) => {
        if (!state.isRunning) return {}; // Prevent pausing if not running
        return {
          isRunning: false, 
          isPaused: true,
          currentPauseStart: Date.now() 
        }
      }),
      resetTimer: () => set((state) => ({
        isRunning: false,
        isPaused: false,
        timeRemaining: state.workDuration,
        totalPauseTime: 0
      })),
      setCustomTime: (time) => set({ timeRemaining: time, workDuration: time }),
      switchTimerType: (type) => set((state) => {
        let newTime;
        if (type === 'WORK') newTime = state.workDuration;
        else if (type === 'SHORT_BREAK') newTime = state.shortBreakDuration;
        else newTime = state.longBreakDuration;
        return {
          timerType: type,
          timeRemaining: newTime,
          isRunning: false,
          isPaused: false
        };
      }),
      updatePauseTime: () => set((state) => {
        if (state.isPaused && state.currentPauseStart) {
          const pauseDuration = (Date.now() - state.currentPauseStart) / 1000;
          return { totalPauseTime: state.totalPauseTime + pauseDuration };
        }
        return {};
      }),
      completeSession: () => set((state) => ({ completedSessions: state.completedSessions + 1 })),
      setTimeRemaining: (time) => set({ timeRemaining: time }),
    }),
    {
      name: 'pomodoro-storage',
      partialize: (state) => ({
        workDuration: state.workDuration,
        shortBreakDuration: state.shortBreakDuration,
        longBreakDuration: state.longBreakDuration,
        autoStartBreaks: state.autoStartBreaks,
        soundEnabled: state.soundEnabled,
        completedSessions: state.completedSessions,
      }),
    }
  )
);

export default usePomodoroStore; 