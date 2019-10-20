const extractProp = (prop: any) => (obj: any) =>
  typeof obj === "undefined" ? undefined : obj[prop];
const extractOptions = extractProp("options");
const extractListener = extractProp("listener");

const bestMatch = (extractor: any) => (possibilities: any) =>
  extractor(
    possibilities.find((p: any) => typeof extractor(p) !== "undefined")
  );
export const bestListener = bestMatch(extractListener);
export const bestOptions = bestMatch(extractOptions);
