import React from 'react';

const TimerControls = ({ isRunning, onStart, onPause, onReset }) => {
  return (
    <div className="timer-controls">
      <button onClick={isRunning ? onPause : onStart}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default TimerControls; 