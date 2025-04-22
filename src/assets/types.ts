export type Question = {
  id: string;
  question: string;
  answer: string;
  teacher: string;
  createdAt: string;
  tags: string[];
  isVerified: boolean;
  changedAt: string;
};
