import { useState, useEffect, useRef } from 'react';
import Router from 'next/router';

type IndicatorState = {
  isLoading: boolean;
  progress: number;
};

export default function useLoadingIndicator() {
  const [state, setState] = useState<IndicatorState>({
    isLoading: false,
    progress: 0,
  });
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const startLoading = () => {
    clearInterval(intervalRef.current);
    setState({ isLoading: true, progress: 0 });
    intervalRef.current = setInterval(() => {
      setState((prev) => ({
        isLoading: true,
        progress: Math.min(prev.progress + 10, 90),
      }));
    }, 200);
  };

  const stopLoading = () => {
    clearInterval(intervalRef.current);
    setState({ isLoading: true, progress: 100 });
    setTimeout(() => {
      setState({ isLoading: false, progress: 0 });
    }, 300);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeError', stopLoading);
    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
      clearInterval(intervalRef.current);
    };
  }, []);

  return state;
}
