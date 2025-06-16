import React from 'react';
import usePomodoroStore from '../../../stores/pomodoroStore';

const SessionStats = () => {
  const { completedSessions } = usePomodoroStore();

  return (
    <div>
      <h4>Completed Sessions</h4>
      <p>{completedSessions}</p>
    </div>
  );
};

export default SessionStats; 