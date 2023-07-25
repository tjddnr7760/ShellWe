export const MakePartOfBodyText = (body: string, numberOfText: number) => {
  if (body.length < numberOfText) {
    return body;
  } else {
    const slicebody = body.slice(0, numberOfText);
    return slicebody.charAt(slicebody.length - 1) === '.'
      ? slicebody + '.'
      : slicebody + '..';
  }
};
