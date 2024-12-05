import { c as create_ssr_component, v as validate_component, b as add_attribute, m as missing_component, e as escape, d as each } from "../../chunks/ssr.js";
import "../../chunks/supabase.js";
import { I as IconBase } from "../../chunks/IconBase.js";
import { F as FaSpinner } from "../../chunks/FaSpinner.js";
const MdLaptopChromebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 24 24" }, $$props), {}, {
    default: () => {
      return `<path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"></path>`;
    }
  })}`;
});
const MdPageview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 24 24" }, $$props), {}, {
    default: () => {
      return `<path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path>`;
    }
  })}`;
});
const MdGraphicEq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 24 24" }, $$props), {}, {
    default: () => {
      return `<path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"></path>`;
    }
  })}`;
});
const MdSettingsBrightness = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 24 24" }, $$props), {}, {
    default: () => {
      return `<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path>`;
    }
  })}`;
});
const QuizCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconList = [MdPageview, MdGraphicEq, MdSettingsBrightness, MdLaptopChromebook];
  let SelectedComponent = null;
  function returnIcon() {
    const iconListNum = Math.floor(Math.random() * iconList.length);
    SelectedComponent = iconList[iconListNum];
    return SelectedComponent;
  }
  let { quiz } = $$props;
  returnIcon();
  if ($$props.quiz === void 0 && $$bindings.quiz && quiz !== void 0) $$bindings.quiz(quiz);
  return `  <a${add_attribute("style", `background-color: ${quiz.color_hex}`, 0)}${add_attribute("href", `/quizId/${quiz["quiz_id"]}`, 0)}${add_attribute("class", `w-[12.5rem] h-[12rem] justify-center flex flex-col text-center m-auto text-slate-200  border-black border-[1px] rounded-t-[15px] py-5 hover:!bg-slate-[${quiz.color_hex + "100"}] hover:brightness-125 `, 0)}><section>  <div class="m-auto w-[5rem] h-[5rem]">${SelectedComponent ? `${validate_component(SelectedComponent || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``}</div></section>  <p>${escape(quiz["quiz_name"])}</p> </a>`;
});
const QuizList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quizzes } = $$props;
  if ($$props.quizzes === void 0 && $$bindings.quizzes && quizzes !== void 0) $$bindings.quizzes(quizzes);
  return `<div class="grid grid-cols-4 gap-y-6 w-[100%]">${each(quizzes, (quiz, index) => {
    return `${validate_component(QuizCard, "QuizCard").$$render($$result, { quiz }, {}, {})}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let quizzes = [];
  return `<body id="App" class="h-[100vh]"><div><h1 class="text-center text-xl font-semibold" data-svelte-h="svelte-p8k4oi">Choose from one of the following question form <br> See how many you get right</h1>   <section class="w-[30%] h-auto m-auto text-center my-4 bg-slate-100 px-3 py-3 gap-2" data-svelte-h="svelte-1tij67f"><p>This app is for people to learn more about each other by playing 3 truths and a lie or however many lies and one truth. It is supposed to be fun and help people learn more about each other as an icebreaker. Enjoy!</p> <a href="createQuiz" class="bg-slate-500 px-2 py-1 rounded transition ease-in hover:bg-slate-100 hover:border-black hover:border-[1px]">Create quiz</a></section> ${quizzes.length > 0 ? `${validate_component(QuizList, "QuizList").$$render($$result, { quizzes }, {}, {})}` : `<div class="w-[5rem] h-[5rem] m-auto my-8 animate-spin">${validate_component(FaSpinner, "FaSpinner").$$render($$result, {}, {}, {})}</div>`}</div></body>`;
});
export {
  Page as default
};
