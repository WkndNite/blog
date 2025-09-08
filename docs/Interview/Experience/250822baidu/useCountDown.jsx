export function useCountDown(initialTime, interval = 1000, callback) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const timer = useRef(null);

  const formatTime = useMemo(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }, [time]);

  const percent = useMemo(
    () => (time / initialTime) * 100,
    [time, initialTime],
  );

  const start = useCallback(() => {
    // time <= 0 直接返回
    // 避免新建定时器然后销毁
    if (timer.current || time <= 0) return;
    setIsRunning(true);
    timer.current = setInterval(() => {
      setTime((time) => {
        if (time <= 1) {
          clearInterval(timer.current);
          timer.current = null;
          callback?.();
          setIsRunning(false);
          return 0;
        }
        return time - 1;
      });
    }, interval);
  }, [interval, callback, time]);

  const pause = useCallback(() => {
    if (!timer.current) return;
    setIsRunning(false);
    clearInterval(timer.current);
    timer.current = null;
  }, []);

  const reset = useCallback(() => {
    pause();
    setTime(initialTime);
  }, [initialTime, pause]);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };
  }, []);

  return {
    time,
    formatTime,
    percent,
    isRunning,
    start,
    pause,
    reset,
  };
}
