<script lang="ts">
    import {MC, Navbar} from '../lib'
    import "../app.css";
    // import Counter from './lib/Counter.svelte'
    let currentQuestionIndex = 0;
    let score = 0;
    let quizComplete = false;

    type Answer = {
        text: string | number
        isCorrect: boolean 
        clicked: boolean 
    }
    type Question = {
        id: number
        question: string 
        answers: Answer[]
    }

    let quiz : Question[] = [
        {
            id: 1, 
            question: 'What was the best year?', 
            answers: [
        {text: 2013, isCorrect: false, clicked: false},
        {text: 2016, isCorrect: true, clicked: false},
        {text: 2019, isCorrect: false, clicked: false},
        {text: 2022, isCorrect: false, clicked: false},
        ]
        },
        {
            id: 2, 
            question: 'What time is eastern?', 
            answers: [
        {text: '2AM', isCorrect: false, clicked: false},
        {text: '5AM', isCorrect: true, clicked: false},
        {text: '7AM', isCorrect: false, clicked: false},
        {text: '9AM', isCorrect: false, clicked: false},
        ]
        },
        {
            id: 3, 
            question: 'Whos the best?', 
            answers: [
        {text: 'Princess', isCorrect: false, clicked: false},
        {text: 'Mia', isCorrect: false, clicked: false},
        {text: 'Snowy', isCorrect: false, clicked: false},
        {text: 'Maisy', isCorrect: false, clicked: false},
        {text: 'All of the Above', isCorrect: true, clicked: false},
        ]
        },

    ]


    let qA = [
        {text: 2013, isCorrect: false, clicked: false},
        {text: 2016, isCorrect: true, clicked: false},
        {text: 2019, isCorrect: false, clicked: false},
        {text: 2022, isCorrect: false, clicked: false},
        
        ]
        const handleCompare = async ( indx: number ) => {
            if (quiz[currentQuestionIndex].answers[indx].clicked) return;

        if(!quiz[currentQuestionIndex].answers[indx].clicked) {
            // mark it down 
            quiz[currentQuestionIndex].answers  = quiz[currentQuestionIndex].answers.map((answ, i) => i === indx ? {...answ, clicked: true}: answ);

            // update the score
            if(quiz[currentQuestionIndex].answers[indx].isCorrect) {
                score++;
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
        let currentQuestionIndex = 0;
        let score = 0;
        let quizComplete = false;
        // reset clicks 
        quiz = quiz.map(question => ({
            ...question, answers: question.answers.map(answer => ({...answer, clicked: false}))
        }))
    }

  </script>
  
  <body id='App' class="h-[100vh]">
    <div>
      <Navbar />
      <p>{score}</p>
      <h1 class="text-center text-4xl font-semibold">Welcome to my trivia app</h1>
      <MC  handleClick={nextQuestion} handleCompare={handleCompare} question={quiz[currentQuestionIndex].question} questionAnswers={quiz[currentQuestionIndex].answers}  />
  
    </div>
  </body>
  
  <style global lang="postcss">
      @tailwind utilities;
    @tailwind components;
    @tailwind base;
  </style>
  