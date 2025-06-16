import React from 'react';
import usePomodoroStore from '../../../stores/pomodoroStore';

const CircularTimer = ({ percentage }) => {
  const { timerType } = usePomodoroStore();
  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    switch (timerType) {
      case 'WORK':
        return '#f87171'; // Red-orange for work
      case 'SHORT_BREAK':
        return '#60a5fa'; // Green-blue for break
      case 'LONG_BREAK':
        return '#34d399'; // Different green for long break
      default:
        return '#f87171';
    }
  };

  return (
    <svg className="circular-timer" viewBox="0 0 300 300">
      <circle
        className="circular-timer-background"
        cx="150"
        cy="150"
        r={radius}
        strokeWidth="10"
        fill="transparent"
      />
      <circle
        className="circular-timer-progress"
        cx="150"
        cy="150"
        r={radius}
        stroke={getColor()}
        strokeWidth="10"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 150 150)"
      />
    </svg>
  );
};

export default CircularTimer; 