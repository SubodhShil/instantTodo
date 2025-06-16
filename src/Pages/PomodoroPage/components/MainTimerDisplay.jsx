import React from 'react';
import CircularTimer from './CircularTimer';
import DigitalDisplay from './DigitalDisplay';

const MainTimerDisplay = ({ time, percentage, isRunning }) => {
  return (
    <div className={`timer-display-container ${isRunning ? 'pulsing' : ''}`}>
      <CircularTimer percentage={percentage} />
      <div className="digital-display">
        <DigitalDisplay time={time} />
      </div>
    </div>
  );
};

export default MainTimerDisplay; 