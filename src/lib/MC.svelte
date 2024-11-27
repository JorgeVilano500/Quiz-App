
<script>
    export let question;
    export let questionAnswers;
    export let handleCompare;
    export let handleClick;
    let alphabet=  ['A', 'B', 'C', 'D', 'E']

    import {onMount} from 'svelte'

    onMount(() => {
      console.log(questionAnswers)
    })

    

    // correct answer willl be the index of the answer that was given, 
    // this will then be tested against clicked anaswer to contribute to overall score. 

</script>

<section class="text-center">
    <h2 class="mb-6">{question}</h2>

    <div class="grid grid-cols-2 grid-rows-2 w-[50%] m-auto gap-2 ">

      {#each questionAnswers as answer, index}
      <div class={`${answer.clicked ? (answer.clicked === true && answer.is_correct ? "correct" : "wrong"): "default"} rounded flex flex-row justify-start w-[90%] m-auto py-2 border border-transparent transition ease-in hover:border-[1px] hover:border-slate-500 hover:bg-slate-200`}>
            <button on:click={() => handleCompare(index)} class={` px-2 flex flex-row  rounded w-[100%] `}>
                <!-- <h4 class="mx-2">{alphabet[index]}</h4> -->
                 <input type="radio" checked={answer.clicked} class="self-center" />
                <h4 class="mx-2">{answer.answer}</h4>
            </button>
          </div>
          {/each}
          
        </div>
    <div>
        <!-- <button class="bg-slate-400 border border-transparent py-1 px-2 rounded hover:bg-slate-500 hover:border-[1px] hover:border-black" on:click={() => handleClick()}>Next</button> -->
        
    </div>

</section>


<style>
  .button {
    padding: 10px;
    cursor: pointer;
  }
  .correct {
    background-color: green;
    color: white;
  }
  .wrong {
    background-color: red;
    color: white;
  }
  .default {
    background-color: lightgray;
    color: black;
  }
</style>