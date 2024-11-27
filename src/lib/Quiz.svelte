
<script lang='ts'>
    import {QuizComplete, MC} from './index'

    let currentQuestionIndex = 0;
    let score = 0;
    let quizComplete: boolean = false;
    export let quizQuestions;
    let attemptPerQuestion: number = Math.floor(quizQuestions.length/2);
    import type {Question} from "$lib/api";


    let quiz : Question[] = quizQuestions;
    // [
        // {
        //     id: 1,
        //     creator_id: 'JAVA',
        //     question: 'What was the best year?', 
        //     answers: [
        // {text: 2013, isCorrect: false, clicked: false},
        // {text: 2016, isCorrect: true, clicked: false},
        // {text: 2019, isCorrect: false, clicked: false},
        // {text: 2022, isCorrect: false, clicked: false},
        // ]
        // },
        // {
        //     id: 2, 
        //     creator_id: 'JAVA',
        //     question: 'What time is eastern?', 
        //     answers: [
        // {text: '2AM', isCorrect: false, clicked: false},
        // {text: '5AM', isCorrect: true, clicked: false},
        // {text: '7AM', isCorrect: false, clicked: false},
        // {text: '9AM', isCorrect: false, clicked: false},
        // ]
        // },
        // {
        //     id: 3, 
        //     creator_id: 'JAVA',
        //     question: 'Whos the best?', 
        //     answers: [
        // {text: 'Princess', isCorrect: false, clicked: false},
        // {text: 'Mia', isCorrect: false, clicked: false},
        // {text: 'Snowy', isCorrect: false, clicked: false},
        // {text: 'Maisy', isCorrect: false, clicked: false},
        // {text: 'All of the Above', isCorrect: true, clicked: false},
        // ]
        // },

    // ]


 
        const handleCompare = async ( indx: number ) => {
            if (quiz[currentQuestionIndex].question_answers[indx].clicked) return;

        if(!quiz[currentQuestionIndex].question_answers[indx].clicked) {
            // mark it down 
            quiz[currentQuestionIndex].question_answers  = quiz[currentQuestionIndex].question_answers.map((answ, i) => i === indx ? {...answ, clicked: true}: answ);

            // make sure to check if they still have another shot left
            if(attemptPerQuestion > 0) {

                // update the score
                if(quiz[currentQuestionIndex].question_answers[indx].is_correct) {
                score++;
                attemptPerQuestion = quizQuestions.length - 1;
                if(currentQuestionIndex < quiz.length - 1) {
                    currentQuestionIndex++;
                } else {
                    quizComplete = true;
                    // restartQuiz();
                }
            } else {
                if(currentQuestionIndex < quiz.length - 1 || attemptPerQuestion > 0) {
                    // currentQuestionIndex++;
                    attemptPerQuestion--;
                } else {

                    quizComplete = true;
                    // restartQuiz();
                }
            }
        } else {
            if(currentQuestionIndex < quiz.length - 1) {
                currentQuestionIndex++;
                attemptPerQuestion = quizQuestions.length -1;
            } else {
                quizComplete = true
            }
        }
        }




        // check and update the score 


    }

    function nextQuestion() {
        if(currentQuestionIndex < quiz.length - 1) {
            currentQuestionIndex++;
        } else {
            quizComplete = true;
            // need to show score and then restart the quiz after they press a button. 
            // restartQuiz();
        }
    }

    function restartQuiz() {
         currentQuestionIndex = 0;
         score = 0;
         quizComplete = false;
         attemptPerQuestion = quizQuestions.length -1;
        // reset clicks 
        quiz = quiz.map(question => ({
            ...question, question_answers: question.question_answers.map(answer => ({...answer, clicked: false}))
        }))
    }
    

</script>

<main>
   {#if quizComplete}
        <QuizComplete
            quizLength={quiz.length}
            restartQuiz={restartQuiz}
            totalScore={score}
          />
    {:else}
        <MC 
         handleClick={nextQuestion}
          handleCompare={handleCompare}
           question={quiz[currentQuestionIndex].question_text}
            questionAnswers={quiz[currentQuestionIndex].question_answers}  
            />
    {/if}
</main>