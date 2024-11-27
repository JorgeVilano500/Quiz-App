
<script lang="ts">
  import MdLaptopChromebook from 'svelte-icons/md/MdLaptopChromebook.svelte'
  import MdPageview from 'svelte-icons/md/MdPageview.svelte'
  import MdGraphicEq from 'svelte-icons/md/MdGraphicEq.svelte'
  import MdSettingsBrightness from 'svelte-icons/md/MdSettingsBrightness.svelte'

  type SvelteComponentType = typeof MdLaptopChromebook | typeof MdPageview | typeof MdGraphicEq | typeof MdSettingsBrightness

  const iconList: SvelteComponentType[] = [MdPageview, MdGraphicEq, MdSettingsBrightness, MdLaptopChromebook ]
  let SelectedComponent: SvelteComponentType | null = null;

  function returnIcon() {
    const iconListNum =  Math.floor(Math.random() * iconList.length)
    SelectedComponent = iconList[iconListNum] 
    return SelectedComponent
  }


    export let quiz;
   import { setContext} from 'svelte'
    
    function setQuizId(quizId: number) {
      setContext('quizId', quizId)
    }

   returnIcon();
</script>

<!-- this is the form id as an index -->
<!-- {quiz["quiz_id"]}. -->
<a style={`background-color: ${quiz.color_hex}`} on:click={() => setQuizId(quiz["quiz_id"])} href={`/quizId/${quiz["quiz_id"]}`} class={`w-[12.5rem] h-[12rem] justify-center flex flex-col text-center m-auto text-slate-200  border-black border-[1px] rounded-t-[15px] py-5 hover:!bg-slate-[${quiz.color_hex + '100'}] hover:brightness-125 `}>
  <section>
    <!-- i want to make icon random -->
    <!-- {returnIcon()} -->
     <div  class="m-auto w-[5rem] h-[5rem]" >
       {#if SelectedComponent}
       <svelte:component this={SelectedComponent}/>
       {/if}
      </div>
  </section>
    <!-- this will be the card holding quiz information and their authors -->
    <p> {quiz["quiz_name"]}</p>
    <!-- <p>Likes: {quiz.likes}</p> -->
</a>