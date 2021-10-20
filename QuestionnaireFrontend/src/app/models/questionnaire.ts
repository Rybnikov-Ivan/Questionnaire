export interface Questionnaire {
  id: number,
  title: string,
  description: string,
  questions: Array<Question>
}

export interface Question {
  id: number,
  question: string,
  typeAnswer: String,
  answers: Array<Answer>
}

export interface Answer {
  option: String
}
