

<script lang="ts">
    import {QuizCard} from './index' 
    export let quizzes;

    // let quizzes: Question[] = [
    //     {
    //         id: 1,
    //         creator_id: 'JAVA',
    //         question: 'What was the best year?', 
    //         answers: [
    //     {text: 2013, isCorrect: false, clicked: false},
    //     {text: 2016, isCorrect: true, clicked: false},
    //     {text: 2019, isCorrect: false, clicked: false},
    //     {text: 2022, isCorrect: false, clicked: false},
    //     ]
    //     },
    //     {
    //         id: 2,
    //         creator_id: 'JAVA',
    //         question: 'What time is eastern?', 
    //         answers: [
    //     {text: '2AM', isCorrect: false, clicked: false},
    //     {text: '5AM', isCorrect: true, clicked: false},
    //     {text: '7AM', isCorrect: false, clicked: false},
    //     {text: '9AM', isCorrect: false, clicked: false},
    //     ]
    //     },
    //     {
    //         id: 3,
    //         creator_id: 'JAVA',
    //         question: 'Whos the best?', 
    //         answers: [
    //     {text: 'Princess', isCorrect: false, clicked: false},
    //     {text: 'Mia', isCorrect: false, clicked: false},
    //     {text: 'Snowy', isCorrect: false, clicked: false},
    //     {text: 'Maisy', isCorrect: false, clicked: false},
    //     {text: 'All of the Above', isCorrect: true, clicked: false},
    //     ]
    //     }
    // ]
</script>


<div class="grid grid-cols-4 gap-y-6 w-[100%]">
    {#each quizzes as quiz, index} 
        <QuizCard  quiz={quiz} />
    {/each}

</div>

