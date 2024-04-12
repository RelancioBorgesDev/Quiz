export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswIdx: number;
};
export type Questions = {
  questions: Question[];
};
