import React from 'react';
import usePomodoroStore from '../../../stores/pomodoroStore';

const PauseTimeTracker = () => {
  const { totalPauseTime } = usePomodoroStore();

  const formatPauseTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}m ${secs}s`;
  };

  return (
    <div>
      <h4>Pause Time</h4>
      <p>{formatPauseTime(totalPauseTime)}</p>
    </div>
  );
};

export default PauseTimeTracker; 