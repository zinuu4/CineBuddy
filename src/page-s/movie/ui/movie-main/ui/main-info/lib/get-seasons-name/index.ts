/* eslint-disable no-else-return */
export const getSeasonsName = (seasons: number) => {
  if (seasons === 1) {
    return `${seasons} Сезон`;
  } else if (seasons >= 2 && seasons <= 4) {
    return `${seasons} Сезона`;
  } else {
    return `${seasons} Сезонов`;
  }
};
