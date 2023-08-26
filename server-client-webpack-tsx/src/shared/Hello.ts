export interface Hello {
  name: string;
}

export function isHello(h: unknown): h is Hello {
  return !!(
    h &&
    typeof h === "object" &&
    "name" in h &&
    typeof h.name === "string"
  );
}
