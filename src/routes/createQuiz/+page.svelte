<script lang="ts">
  import { onMount, setContext } from 'svelte';
    import { QuestionForm } from '../../lib/index';
    import {createClient} from '@supabase/supabase-js'

    const apiURL = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    const supabase = createClient(apiURL, anonKey);

    let quizFormId: number;
    let questionFormLength: number;
    async function fetchListLength() {
        const {data, error} = await supabase.from('question_answers').select();
        if(error) console.log(error);
        if(data) {
          questionFormLength = data.length + 1;
          setContext('questionFormLength', data.length)
        }
    }

    async function fetchFormId() {
        const {data, error} = await supabase.from('quizzes_table').select();
        if(error) console.log(error);
        if(data) {
          quizFormId = data.length + 1;
          setContext('quizFormId', data.length)
        }
    }

 onMount(() => {
    fetchFormId()
    fetchListLength();
 })

  

</script>


<div>
    <h2 class="text-center my-2 text-xl font-semibold">Welcome and create a quiz</h2>
    <QuestionForm
        quizFormId={quizFormId }
        questionFormLength={questionFormLength}
    />

</div>

<!-- questionListLength={}  -->
 <!-- form list length -->