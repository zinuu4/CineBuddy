export const cleanHtmlFromText = (htmlText: string) => {
  const doc = new DOMParser().parseFromString(htmlText, 'text/html');
  return doc.body.textContent;
};
