export const createObserver = (
  videoElement: HTMLVideoElement | null,
  setImgVisibility: (arg: boolean) => void,
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
          setImgVisibility(false);
          videoElement.currentTime = 0;
          videoElement.play();
        }, 1500);
      } else {
        setImgVisibility(true);
        videoElement?.pause();
      }
    });
  }, options);

  return { observer };
};