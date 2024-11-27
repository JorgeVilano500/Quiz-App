<script lang="ts">
    import type {Question} from '$lib/api';
    import { page } from '$app/stores';
    import { Quiz} from '$lib/index';
    import FaSpinner from 'svelte-icons/fa/FaSpinner.svelte'

    let quiz: Question[];
//      [{
//     "form_id": 1,
//     "question_id": 1,
//     "question_text": "What is the best year?",
//     "creator_id": "JAVA",
//     "question_answers": [
//         {
//             "answer": "2016",
//             "answer_id": 1,
//             "is_correct": true,
//             "clicked": false,
//             "question_ans_id": 1
//         },
//         {
//             "answer": "2019",
//             "answer_id": 2,
//             "is_correct": false,
//             "clicked": false,
//             "question_ans_id": 1
//         },
//         {
//             "answer": "2022",
//             "answer_id": 3,
//             "is_correct": false,
//             "clicked": false,
//             "question_ans_id": 1
//         }
//     ]
// }]
    import { onMount} from 'svelte'
    import {createClient} from '@supabase/supabase-js'

    let quizId: string;
    $: quizId = $page.params.quizId
    // get context
    // import {getSupaBaseContext} from '../../../context/supabaseContext';

    // const supabase = getSupaBaseContext();
    const apiURL = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    const supabase = createClient(apiURL, anonKey);

    async function fetchQuestions() {
        let {data, error} = await supabase.from('question_table').select(`form_id, question_id, question_text, creator_id, question_answers(answer_id, question_ans_id, answer, is_correct, clicked)`).eq('form_id', quizId)
        if(error) console.log(error);
        quiz = data as Question[]
    }
    onMount(async () => {
        fetchQuestions();
    } )

</script>

<section>
    <h1 class="m-auto text-center py-4">You have a limited amount of time for Questions</h1>
    {#if quiz}

        <Quiz quizQuestions={quiz} />
        {:else}
        <div class="animate-spin w-[5rem] h-[5rem] m-auto">
            <FaSpinner />
        </div>

    {/if}
    <!-- right now the quiz doesnt work because the values aren't defined when passed down. I have to figure out when I can do this again.  -->
</section>

