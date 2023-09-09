export function convertName(name: string) {
  if (name.length > 14) {
    return `${name.slice(0, 13)}.`;
  }
  return name;
}
