
<script lang='ts'>
    import {QuizComplete, MC} from './index'

    let currentQuestionIndex = 0;
    let score = 0;
    let quizComplete: boolean = false;
    export let quizQuestions;
    let attemptPerQuestion: number = 2; 
    // Math.floor(quizQuestions.length/2);
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
    const increaseScore = () => {
        return currentQuestionIndex++;
    }


 
        const handleCompare = async ( indx: number ) => {
            if (quiz[currentQuestionIndex].question_answers[indx].clicked) return;

            // need to fix this shitty logic 

        if(!quiz[currentQuestionIndex].question_answers[indx].clicked) {
            // mark it down 
            quiz[currentQuestionIndex].question_answers  = quiz[currentQuestionIndex].question_answers.map((answ, i) => i === indx ? {...answ, clicked: true}: answ);

            // make sure to check if they still have another shot left
                // if correct will increase score and move on 

                // update the score
                if(quiz[currentQuestionIndex].question_answers[indx].is_correct && currentQuestionIndex <= quiz.length - 1) {
                score++;
                attemptPerQuestion = 2;
                setTimeout(increaseScore, 1000);
                // attemptPerQuestion = quizQuestions.length - 1;
                // need to have a second pass before moving on to show green 
                // if it is not correct
            } else if (!quiz[currentQuestionIndex].question_answers[indx].is_correct) {
                if(currentQuestionIndex <= quiz.length - 1 && attemptPerQuestion > 0) {
                    // currentQuestionIndex++;
                    // should have a delay so when they see failure they move on next
                    attemptPerQuestion--;
                } else if(currentQuestionIndex <= quiz.length - 1 && attemptPerQuestion === 0) {
                    currentQuestionIndex++;
                    attemptPerQuestion = 2;
                    
                    // quizComplete = true;
                    // restartQuiz();
                } 
            } else if(currentQuestionIndex === quiz.length - 1   ) {
                    quizComplete = true;
                }
        
        //i dont think i need this
        //  else if(currentQuestionIndex < quiz.length - 1 || attemptPerQuestion === 1)  {
        //         // have a timer before moving on
        //         attemptPerQuestion = 2;
        //         setTimeout(increaseScore, 1000)
            
        // }
        // else {
        //         quizComplete = true
        //     }
        }

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
        score={score}
         handleClick={nextQuestion}
         attemptPerQuestion={attemptPerQuestion}
          handleCompare={handleCompare}
           question={quiz[currentQuestionIndex].question_text}
            questionAnswers={quiz[currentQuestionIndex].question_answers}  
            />
    {/if}
</main>