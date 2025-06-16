import React, { useEffect } from 'react';
import MainTimerDisplay from './components/MainTimerDisplay';
import TimerControls from './components/TimerControls';
import TimerTypeSelector from './components/TimerTypeSelector';
import CustomTimeInput from './components/CustomTimeInput';
import PauseTimeTracker from './components/PauseTimeTracker';
import SessionStats from './components/SessionStats';
import usePomodoroStore from '../../stores/pomodoroStore';
import './PomodoroPage.css';

const PomodoroPage = () => {
  const {
    timeRemaining,
    isRunning,
    timerType,
    workDuration,
    shortBreakDuration,
    longBreakDuration,
    setTimeRemaining,
    startTimer,
    pauseTimer,
    resetTimer,
    completeSession,
    soundEnabled,
    autoStartBreaks,
    switchTimerType,
  } = usePomodoroStore();

  useEffect(() => {
    let timer;
    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      pauseTimer();
      completeSession();

      if (Notification.permission === 'granted') {
        new Notification('Pomodoro Timer', {
          body: `${timerType} session complete!`,
        });
      }

      if (autoStartBreaks) {
        if (timerType === 'WORK') {
          switchTimerType('SHORT_BREAK');
        } else {
          switchTimerType('WORK');
        }
        startTimer();
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeRemaining, setTimeRemaining, pauseTimer, completeSession, soundEnabled, timerType, autoStartBreaks, switchTimerType, startTimer]);

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const handleStartPause = () => {
    if (isRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  };
  
  const getDuration = () => {
    switch(timerType) {
      case 'WORK': return workDuration;
      case 'SHORT_BREAK': return shortBreakDuration;
      case 'LONG_BREAK': return longBreakDuration;
      default: return workDuration;
    }
  }

  const percentage = (timeRemaining / getDuration()) * 100;

  return (
    <div className="pomodoro-page">
      <h1>Pomodoro Timer</h1>
      <TimerTypeSelector />
      <MainTimerDisplay 
        time={timeRemaining} 
        percentage={100 - percentage} 
        isRunning={isRunning} 
      />
      <TimerControls
        isRunning={isRunning}
        onStart={handleStartPause}
        onPause={handleStartPause}
        onReset={resetTimer}
      />
      <CustomTimeInput />
      <PauseTimeTracker />
      <SessionStats />
    </div>
  );
};

export default PomodoroPage; 