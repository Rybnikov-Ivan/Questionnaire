export interface Questionnaire {
  id: number,
  name: string,
  description: string,
  questions: Array<Question>
}

export interface Question {
  id: number,
  label: string,
  answer: string
}
