export interface questionnaire {
  id: number,
  name: string,
  description: string,
  questions: Array<question>
}

export interface question {
  id: number,
  label: string,
  answer: string
}
