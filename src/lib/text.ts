export type Lang = "en" | "fr";
export type Text = string | { en: string; fr: string };

// English version, for alt text and React keys
export const plain = (x: Text) => (typeof x === "string" ? x : x.en);
