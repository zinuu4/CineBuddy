export const createObserver = (
  videoElement: HTMLVideoElement | null,
  setIsActive: (arg: boolean) => void,
): { observer: IntersectionObserver } | undefined => {
  if (!videoElement) {
    return;
  }

  const options = {
    threshold: 0.5,
  };

  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          setIsActive(true);
          videoElement.currentTime = 0;
          videoElement.play();
        }, 1500);
      } else {
        setIsActive(false);
        videoElement?.pause();
      }
    });
  }, options);

  return { observer };
};
