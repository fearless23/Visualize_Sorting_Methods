export type NumType =
  | "POINTER"
  | "COMPARE"
  | "DEFAULT"
  | "SORTED"
  | "TOSWAP"
  | "SWAPLEFT"
  | "SWAPRIGHT";
export type SortOptions = {
  size: number;
  speed: number;
  mIdx: number;
};
