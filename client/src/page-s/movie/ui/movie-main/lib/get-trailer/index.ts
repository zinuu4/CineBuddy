import type { IVideoTypes, IVideo } from 'shared/api';

export function getTrailer(
  videos: IVideoTypes | undefined,
): IVideo | undefined {
  const trailers = videos?.trailers ?? videos?.teasers ?? [];
  const trailer = trailers?.find(
    (t) => t.type === 'TRAILER' && t.site === 'youtube',
  );
  const trailersLength = trailers?.length;
  return trailer ?? trailers[trailersLength - 1];
}
