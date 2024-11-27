
<script>
    export let totalScore; 
    export let restartQuiz;
    export let quizLength;
    import FaPenAlt from 'svelte-icons/fa/FaPenAlt.svelte'
    import FaPray from 'svelte-icons/fa/FaPray.svelte'
</script>

<main class="text-center my-12 flex flex-col gap-4 ">
    <h1 class="text-4xl font-semibold">Congratulations!</h1>
    <p>You Answered:</p>
    <div class="flex flex-row justify-center gap-8">
        <!-- can switch out icons for others that we can use -->
        <div class="w-[5rem] h-[5rem]">
            <FaPray />
        </div>
        <p class="text-3xl font-bold text-slate-500 self-center">{totalScore}/{quizLength}</p>
        <div class="w-[5rem] h-[5rem]">
            <FaPenAlt />
        </div>
    </div>
    <p>Questions correct</p>
    <section class="h-[auto] w-[30%] m-auto flex flex-row justify-center">
        <button class="w-[auto] h-[auto] hover rounded-lg  m-auto border-black border-[1px] bg-sky-400 text-slate-200 px-4 py-2  transition ease-in  hover:bg-sky-600 " on:click={() => restartQuiz()}>Play Again</button>
        <a href="/" class="w-[auto] h-[auto] hover rounded-lg  m-auto border-black border-[1px] bg-slate-200 px-4 py-2  transition ease-in  hover:bg-slate-400 ">Back Home</a>
    </section>


</main>