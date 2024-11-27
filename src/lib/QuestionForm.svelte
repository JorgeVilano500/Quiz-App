<script lang="ts">
    import type {Question, Answer} from "$lib/api.ts";
    import {createClient} from '@supabase/supabase-js'
    import {v4 as uuid} from "uuid";
    import {userStore} from './stores/userStore'

    // initialize reactive variable for selected color 
    let color = '#ff0000'


    export let quizFormId: number;
    export let questionFormLength: number;

    
    const apiURL = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    const supabase = createClient(apiURL, anonKey);


 

    let formQuizButton = false;

    var questionId = uuid();

    function createUniqueId() {
        questionId = uuid() 
        return questionId;
    }

    let questions:Question[]= [
        // {
        //     id: 1, 
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
        //     question: 'Whos the best?', 
        //     answers: [
        // {text: 'Princess', isCorrect: false, clicked: false},
        // {text: 'Mia', isCorrect: false, clicked: false},
        // {text: 'Snowy', isCorrect: false, clicked: false},
        // {text: 'Maisy', isCorrect: false, clicked: false},
        // {text: 'All of the Above', isCorrect: true, clicked: false},
        // ]
        // },
    ]
    let currentQuestion = '';
    let currentFormName = '';

    // for answer_id i need to call for the list and see the latest length. 
    // for question_ans_id I need to figure out a unique Id
    let currentAnswer : Answer[] = [{answer:'', is_correct: false, clicked: false, question_ans_id: questionId, answer_id: questionFormLength++}];
    let nextId = 1;

    function removeAnswer(ind: number) {
        currentAnswer = currentAnswer.filter((_,i) => i !== ind);
    }
    function removeQuestion(ind: number) {
        questions = questions.filter((_, i) => i !== ind); 
    }
    function addAnswer() {
        currentAnswer = [...currentAnswer, {answer: '', is_correct: false, clicked: false, answer_id: questionFormLength++, question_ans_id: questionId}]
    }
    function addQuestion() {
        if(currentQuestion && currentAnswer.length > 0) {
            questions = [
                ...questions, {
                    question_id: questionId, 
                    question_text: currentQuestion,
                    question_answers: currentAnswer.map((a) => ({...a})),
                    // need to change creator id soon
                    creator_id: 'JAVA',
                    form_id: quizFormId
                }
            ];
            
            // change form button to green
                formQuizButton = true;

            // reset the form 
            currentQuestion = '';
            currentAnswer = [{answer: '', is_correct: false, clicked: false, answer_id: questionFormLength++, question_ans_id: createUniqueId()}]
        }
    }

     async function addForm() {
        if(formQuizButton) {
            // add form to the form table, to let it get recognized by the next tables.
            const {data, error} = await supabase.from('quizzes_table').insert({creator_id: 'JAVA', quiz_name: currentFormName, color_hex: color, user_policy_id: $userStore?.user_id}).select();

            if(error)console.log('Quizzes Table Error', error);

            
            if(data){
                
                let formId = data[0].quiz_id

                // add each question from the list one at a time
                 questions.forEach(async (item) => {
                // first create the question in the table
                const {data, error}  = await supabase.from('question_table').insert({creator_id: item.creator_id, question_text: item.question_text, form_id: formId, question_id: item.question_id}).select();
                if(error) console.log('Question table Error', error)
                // then add the answers for each question on the answers table.
                if(data ) {
                    let answerId = data[0].question_id;
                    item.question_answers.forEach(async (answer) => {
                        const {error } = await supabase.from('question_answers').insert({ question_ans_id: answerId, is_correct: answer.is_correct, answer: answer.answer, clicked: false})
                        if(error) console.log('Answer table Error', error)
                    })
            }
            
            
        })
        
        // reset the form 
        currentQuestion = '';
            currentAnswer = [{answer: '', is_correct: false, clicked: false, answer_id: questionFormLength++, question_ans_id: createUniqueId()}]
            formQuizButton = false;
            currentFormName = ''
            questions = []
        } else return;
        
    }
    }

    function getColorName(hex: string) {
        return `Selected ${hex}`;
    }

    

</script>

<div>
    <form on:submit|preventDefault={addQuestion}>
        <div class="w-[25%]  text-center m-auto">

            <label class="m-auto my-2" for="question">Form Name:</label>
            <input
            type="text"
            id="question"
            bind:value={currentFormName}
            class="border p-2 rounded m-auto w-[100%]"
            placeholder="Enter your question"
            required
            />
        </div>
        <section class="flex flex-row justify-center gap-4">

           
            <div class="flex flex-col">
                <!-- <label class="m-auto my-2">Choose a Color:</label> -->
                <input
                    type="color"
                    bind:value={color}
                    class="p-2 rounded m-auto w-[100%]"
                    aria-label="Select a color"
                />
                <div >
                    <p>
                        {getColorName(color)}
                    </p>
                </div>
           
        </div>

        <div class="flex flex-col">
            
            <label class="m-auto my-2" for="question">Add Question:</label>
            <input
            type="text"
            id="question"
            bind:value={currentQuestion}
            class="border p-2 rounded m-auto w-[100%]"
            placeholder="Enter your question"
            required
            />
        </div>
    </section>
        <h3 class="text-center my-2">Answers:</h3>
        {#each currentAnswer as answer, index} 
            <div class="mb-2 flex flex-row items-center justify-center ">
                <input 
                    type="text"
                    bind:value={answer.answer}
                    class="border p-2 rounded w-[25%] "
                    placeholder="Answer"
                    required
                />
                <div class="flex flex-row justify-self-center mx-2 gap-4">

                    <label class="flex flex-col">
                        <strong>Correct?</strong>
                        <input
                        class="m-auto"
                        type="checkbox"
                        bind:checked={answer.is_correct}
                        /> </label>
                        <button class="bg-slate-500 py-1 px-2 border border-transparent rounded transition ease-in hover:bg-slate-200 hover:border-[1px] hover:border-black " type="button" on:click={() => removeAnswer(index)}>Remove</button>
                </div>

            </div>
        {/each}
        <div class="flex flex-col">    
            <button on:click={addAnswer} class="bg-slate-100 w-[35%] py-1 rounded border border-transparent m-auto transition ease-in-out hover:bg-slate-500 hover:border-black hover:border-[1px]">+ Add Answer</button>
            
            <button type="submit" class="mt-4 bg-slate-100 w-[25%] m-auto py-1 rounded border border-transparent transition ease-in-out hover:bg-slate-500 hover:border-black hover:border-[1px]">+ Add Question</button>
        </div>
    </form>

    <hr class="my-4" />

    <form on:submit|preventDefault={addForm}>
        <section class="flex flex-row justify-center gap-4">
            <h2 class="text-center mb-4">Question list</h2>
            <button type="submit" class={formQuizButton ? "mb-4 border border-transparent transition ease-in bg-green-300 py-1 px-2 rounded" : "mb-4 border border-transparent bg-slate-500 py-1 px-2 rounded transition ease-in hover:bg-slate-200 hover:border-[1px] hover:border-black  "}>Create Quiz</button>
        </section>
        <ul class="w-[40%] h-[10rem] overflow-y-auto m-auto bg-slate-100">
        {#each questions as question, ind}
            <li class="flex flex-row  items-center justify-around">
                <strong>{ind + 1}. {question.question_text}</strong>
                <ul>
                    {#each question.question_answers as answer}
                    <li>{answer.answer} -  {answer.is_correct? 'Correct'.toUpperCase() : 'Incorrect'}</li>
                    {/each}
                </ul>
                <button class="bg-slate-500 h-[10%]  py-1 px-2 border border-transparent rounded transition ease-in hover:bg-slate-200 hover:border-[1px] hover:border-black " type="button" on:click={() => removeQuestion(ind)}>Remove</button>
            </li>
            {/each}
        </ul>
    </form>

</div>