
<script>
    export let question;
    export let questionAnswers;
    export let handleCompare;
    export let handleClick;
    let alphabet=  ['A', 'B', 'C', 'D', 'E']


    

    // correct answer willl be the index of the answer that was given, 
    // this will then be tested against clicked anaswer to contribute to overall score. 

</script>

<section class="text-center">
    <h2>{question}</h2>

    {#each questionAnswers as answer, index}
        <div class="flex flex-row justify-center py-2">
            <button on:click={() => handleCompare(index)} class={`${answer.clicked ? (answer.isCorrect ? "correct" : "wrong"): "default"} flex flex-row border border-transparent rounded transition ease-in hover:border-[1px] hover:border-slate-500 hover:bg-slate-200`}>
                <h4 class="mx-2">{alphabet[index]}</h4>
                <h4 class="mx-2">{answer.text}</h4>
            </button>
        </div>
    {/each}

    <div>
        <button class="bg-slate-400 border border-transparent py-1 px-2 rounded hover:bg-slate-500 hover:border-[1px] hover:border-black" on:click={() => handleClick()}>Next</button>
        
    </div>

</section>


<style>
  .button {
    padding: 10px;
    margin: 5px;
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