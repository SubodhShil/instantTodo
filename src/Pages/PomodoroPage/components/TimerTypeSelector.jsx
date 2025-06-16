import React from 'react';
import usePomodoroStore from '../../../stores/pomodoroStore';

const TimerTypeSelector = () => {
  const { switchTimerType, timerType } = usePomodoroStore();

  return (
    <div className="timer-type-selector">
      <button 
        onClick={() => switchTimerType('WORK')}
        disabled={timerType === 'WORK'}
      >
        Work
      </button>
      <button 
        onClick={() => switchTimerType('SHORT_BREAK')}
        disabled={timerType === 'SHORT_BREAK'}
      >
        Short Break
      </button>
      <button 
        onClick={() => switchTimerType('LONG_BREAK')}
        disabled={timerType === 'LONG_BREAK'}
      >
        Long Break
      </button>
    </div>
  );
};

export default TimerTypeSelector; 