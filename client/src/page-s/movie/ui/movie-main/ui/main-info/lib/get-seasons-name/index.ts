/* eslint-disable no-else-return */
export const getSeasonsName = (seasons: number) => {
  if (seasons === 1) {
    return `${seasons} сезон`;
  } else if (seasons >= 2 && seasons <= 4) {
    return `${seasons} сезона`;
  } else {
    return `${seasons} сезонов`;
  }
};
