<script lang="ts">
    import {supabase} from '../helpers/supabase';
    import {onMount} from 'svelte'
    import type {UserQuiz} from './api';
    import FaThumbsUp from 'svelte-icons/fa/FaThumbsUp.svelte'
    import {userStore} from './stores/userStore' 

    export let userInfo;
    let showConfirm = false;
    let confirmIndex: number;
    let color: string = '#00000';
    let userQuizzes : UserQuiz[] = [];
    let isEditing = false;
    let newVal: string;

    function handleDoubleClick() {
        isEditing = !isEditing
    }

    async function handleDoubleClickUpdate(event: KeyboardEvent, quiz_id:string ) {
        const target = event?.currentTarget as HTMLInputElement
        // if the event is clicked or entered 
        if(event.key === "Enter") {
            isEditing = false;
            const val = target?.value

            const {error} = await supabase.from('quizzes_table').update({quiz_name: val}).eq('quiz_id', quiz_id)
            if(error) console.log(error.message)

        }
    }
    function handleClickUpdate(event: Event, quiz_id:string) {


    }
    
    function handleColorChange(e: Event ) {
        const target = e.currentTarget as HTMLInputElement | null;

    if (target) {
      const value = target.value; // Access safely after null check
    //   console.log("Changed value:", value);
      color = value
      showConfirm = true;
    }
    }

    async function confirmColor(e: Event, quizId: string){
        // console.log('color confirmed: ', color)
        const {error} = await supabase.from('quizzes_table').update({color_hex: color}).eq('quiz_id', quizId) 
        if(error) {
            console.log('Quiz Color Edit Error', error.message)
        } else{
            showConfirm = false;
        }
    }

    onMount(async () => {
        const {data, error} = await supabase.from('quizzes_table').select().eq('user_policy_id', userInfo?.data?.user?.id)
        console.log(data);

        if(error) console.log('User table Error', error.message)
        else if(data) {
            userQuizzes = data;
        }


    })

</script>

<div class=" w-[70%] bg-slate-400 rounded-lg  mx-auto">

<h3 class="m-2 font-semibold">Your Quizzes</h3>
<div class=" w-[100%] h-[10rem] overflow-y-auto ">

        
        {#each userQuizzes as quiz, i} 
        <div class="bg-slate-200 w-[80%] mx-auto my-2 p-2 rounded-lg flex flex-row justify-between " >
            {#if isEditing}
            <!-- Show when is editing -->
                <input 
                    type="text"
                    bind:value={newVal}
                    on:keydown={(e) => handleDoubleClickUpdate(e, quiz.quiz_id)}
                    autofocus
                />
                <button on:click={(e) => handleClickUpdate(e, quiz?.quiz_id)} class="bg-slate-300 py-1 px-1 rounded ">Update</button>
            {:else}
            <!-- Not shown when its present -->
           <p on:dblclick={handleDoubleClick} class="flex flex-row gap-2 w-[11rem] h-[2rem] "> <span class="bg-slate-500 p-1 rounded ">{i + 1}</span> <span class="w-[100%] self-center truncate">{newVal ? newVal : quiz.quiz_name}</span> </p>
           {/if}

           <section class="group flex flex-row justify-center">

               <input
               type="color"
               bind:value={quiz.color_hex}
               on:change={() => {showConfirm = true; confirmIndex = i}}
               on:input={handleColorChange}
               class="p-1 bg-slate-500 rounded self-center mx-2 h-[2rem] w-[2rem]"
               aria-label="Select a color"  
               />

               <!-- need to figure out how to determine one being clicked and not both being clicked -->
            {#if showConfirm && confirmIndex === i }
                <button class="w-[auto] p-1 rounded bg-green-300" on:click={(e) => confirmColor(e, quiz.quiz_id)} placeholder="Confirm" >Confirm</button>
            {/if}
            </section>
            <section class="self-center flex flex-row gap-3 ">

                 <div  class="self-center w-[1rem] h-[1rem]">
                    <FaThumbsUp />
                </div>
                {quiz.likes}
            </section>

        </div>
        {/each}
        
    </div>
    


</div>