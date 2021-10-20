export interface UserAnswer {
  questionId: number,
  title: string;
  description: string;
  questions: Array<UserQuestion>
}

export interface UserQuestion {
  question: String,
  answer: String
}
