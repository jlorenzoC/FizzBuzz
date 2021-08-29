export const replaceWhiteSpacesForHyphon = (
  stringWihtWhiteSpaceToReplace: string
): string | undefined => {
  const regexAllWhiteSpaces: RegExp = / /g;
  return stringWihtWhiteSpaceToReplace
    .toString()
    .replace(regexAllWhiteSpaces, '-');
};
