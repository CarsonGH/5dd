import { useState, useRef, useEffect } from 'react';

function useReactiveSet(initialValues = []) {
  const [trigger, setTrigger] = useState(false); // Used to trigger re-renders
  const setRef = useRef(new Set(initialValues));

  const forceUpdate = () => setTrigger(prev => !prev); // Increment to trigger re-render

  const add = (value) => {
    if (!setRef.current.has(value)) {
      setRef.current.add(value);
      forceUpdate();
    }
  };

  const remove = (value) => {
    if (setRef.current.has(value)) {
      setRef.current.delete(value);
      forceUpdate();
    }
  };

  const clear = () => {
    setRef.current.clear();
    forceUpdate();
  };

  // This effect is for debugging or additional side effects
  useEffect(() => {
    console.log('Set updated:', setRef.current);
  }, [trigger]);

  return [Array.from(setRef.current), add, remove, clear];
}

export default useReactiveSet;
