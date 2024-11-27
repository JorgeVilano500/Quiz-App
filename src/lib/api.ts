
export type Answer = {
    answer_id: number
    answer: string | number
    is_correct: boolean 
    clicked: boolean 
    question_ans_id: number | string
}
export type Question = {
    question_id: number | string
    question_text: string 
    question_answers: Answer[]
    creator_id: string
    form_id: number
}

export type UserQuiz = {
    creator_id: string
    quiz_id: string
    likes: number
    total_questions: number
    color_hex: string
    quiz_name: string
}
export type UserInfo = {
    user_id: string | undefined 
    email: string |undefined

    username?: string | undefined
}
