export const uppercaseFirstLetter = (word: string): string => {
  return word.replace(/^./, firstLetter => firstLetter.toUpperCase());
};
