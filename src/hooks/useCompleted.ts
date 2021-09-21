import { useState } from 'react';

interface Completed {
  completed: boolean,
  completeChapter: () => void;
}

export const useCompleted = (): Completed => {
  const [completed, setCompleted] = useState(false);
  
  const completeChapter = (): void => {
    setCompleted(true);
  };

  return { completed, completeChapter };
};
