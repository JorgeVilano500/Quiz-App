<script lang="ts">
    import {MC, Navbar, Quiz, QuestionForm, QuizList} from '../lib'
    import {createClient} from '@supabase/supabase-js';
    import {onMount, setContext} from 'svelte'
    import type {UserQuiz} from '$lib/api.ts';
    import FaSpinner from 'svelte-icons/fa/FaSpinner.svelte'
    import {supabase} from '../helpers/supabase'
    // context 

    let sessionInfo;

    // import Counter from './lib/Counter.svelte'
    onMount(async () => {
        const session = await supabase.auth.getSession();
        if(session){
            console.log(session)
            sessionInfo = session
        }
    })


    // const publicURL = env.VITE_SUPABASE_URL
    // const anonKey = env?.VITE_SUPABASE_ANON_KEY

    let quizzes : UserQuiz[] = []

    
  
   

    // setSupabaseContext(supabase);

    async function fetchData() {
    const {data, error} = await supabase.from('quizzes_table').select();
    quizzes = data as UserQuiz[]

    }


    
    onMount(async () => {
      fetchData();

    })


  </script>
  
  <body id='App' class="h-[100vh]">
    <div>
      <h1 class="text-center text-xl font-semibold">Choose from one of the following question form <br> See how many you get right</h1>
        <!-- <Quiz /> -->
        <!-- <QuestionForm /> -->
         <section class="w-[30%] h-auto m-auto text-center my-4 bg-slate-100 px-3 py-3 gap-2">
            <p>This app is for people to learn more about each other by playing 3 truths and a lie or however many lies and one truth. It is supposed to be fun and help people learn more about each other as an icebreaker. Enjoy!</p>
            <a href='createQuiz' class="bg-slate-500 px-2 py-1 rounded transition ease-in hover:bg-slate-100  hover:border-black hover:border-[1px]">Create quiz</a>
         </section>

         {#if quizzes.length > 0}
            <QuizList  quizzes={quizzes} />
          {:else}
          <div class="w-[5rem] h-[5rem] m-auto my-8 animate-spin">
            <FaSpinner  />
          </div>
          {/if}


    </div>
  </body>
  

