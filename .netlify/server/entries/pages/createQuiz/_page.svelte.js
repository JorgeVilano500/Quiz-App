import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/supabase.js";
import { createClient } from "@supabase/supabase-js";
import { v4 } from "uuid";
import { u as userStore } from "../../../chunks/userStore.js";
function getColorName(hex) {
  return `Selected ${hex}`;
}
const QuestionForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  let color = "#ff0000";
  let { quizFormId } = $$props;
  let { questionFormLength } = $$props;
  const apiURL = "https://vzcllffexqjuhpsvbmtw.supabase.co";
  const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Y2xsZmZleHFqdWhwc3ZibXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMTUyNjcsImV4cCI6MjAzNzg5MTI2N30.qBJD8-lbXfZhZX3pxhI2lPgAkdL9oZ8mzJNX8LwGYrA";
  createClient(apiURL, anonKey);
  var questionId = v4();
  let questions = [];
  let currentQuestion = "";
  let currentFormName = "";
  let currentAnswer = [
    {
      answer: "",
      is_correct: false,
      clicked: false,
      question_ans_id: questionId,
      answer_id: questionFormLength++
    }
  ];
  if ($$props.quizFormId === void 0 && $$bindings.quizFormId && quizFormId !== void 0) $$bindings.quizFormId(quizFormId);
  if ($$props.questionFormLength === void 0 && $$bindings.questionFormLength && questionFormLength !== void 0) $$bindings.questionFormLength(questionFormLength);
  $$unsubscribe_userStore();
  return `<div><form><div class="w-[25%] text-center m-auto"><label class="m-auto my-2" for="question" data-svelte-h="svelte-1okiyd0">Form Name:</label> <input type="text" id="question" class="border p-2 rounded m-auto w-[100%]" placeholder="Enter your question" required${add_attribute("value", currentFormName, 0)}></div> <section class="flex flex-row justify-center gap-4"><div class="flex flex-col"> <input type="color" class="p-2 rounded m-auto w-[100%]" aria-label="Select a color"${add_attribute("value", color, 0)}> <div><p>${escape(getColorName(color))}</p></div></div> <div class="flex flex-col"><label class="m-auto my-2" for="question" data-svelte-h="svelte-jve1zm">Add Question:</label> <input type="text" id="question" class="border p-2 rounded m-auto w-[100%]" placeholder="Enter your question" required${add_attribute("value", currentQuestion, 0)}></div></section> <h3 class="text-center my-2" data-svelte-h="svelte-1tdq34o">Answers:</h3> ${each(currentAnswer, (answer, index) => {
    return `<div class="mb-2 flex flex-row items-center justify-center "><input type="text" class="border p-2 rounded w-[25%] " placeholder="Answer" required${add_attribute("value", answer.answer, 0)}> <div class="flex flex-row justify-self-center mx-2 gap-4"><label class="flex flex-col"><strong data-svelte-h="svelte-1hiv453">Correct?</strong> <input class="m-auto" type="checkbox"${add_attribute("checked", answer.is_correct, 1)}></label> <button class="bg-slate-500 py-1 px-2 border border-transparent rounded transition ease-in hover:bg-slate-200 hover:border-[1px] hover:border-black " type="button" data-svelte-h="svelte-7prqjp">Remove</button></div> </div>`;
  })} <div class="flex flex-col"><button class="bg-slate-100 w-[35%] py-1 rounded border border-transparent m-auto transition ease-in-out hover:bg-slate-500 hover:border-black hover:border-[1px]" data-svelte-h="svelte-340v3j">+ Add Answer</button> <button type="submit" class="mt-4 bg-slate-100 w-[25%] m-auto py-1 rounded border border-transparent transition ease-in-out hover:bg-slate-500 hover:border-black hover:border-[1px]" data-svelte-h="svelte-reni1w">+ Add Question</button></div></form> <hr class="my-4"> <form><section class="flex flex-row justify-center gap-4"><h2 class="text-center mb-4" data-svelte-h="svelte-1iv37l0">Question list</h2> <button type="submit"${add_attribute(
    "class",
    "mb-4 border border-transparent bg-slate-500 py-1 px-2 rounded transition ease-in hover:bg-slate-200 hover:border-[1px] hover:border-black  ",
    0
  )}>Create Quiz</button></section> <ul class="w-[40%] h-[10rem] overflow-y-auto m-auto bg-slate-100">${each(questions, (question, ind) => {
    return `<li class="flex flex-row items-center justify-around"><strong>${escape(ind + 1)}. ${escape(question.question_text)}</strong> <ul>${each(question.question_answers, (answer) => {
      return `<li>${escape(answer.answer)} -  ${escape(answer.is_correct ? "Correct".toUpperCase() : "Incorrect")}</li>`;
    })}</ul> <button class="bg-slate-500 h-[10%] py-1 px-2 border border-transparent rounded transition ease-in hover:bg-slate-200 hover:border-[1px] hover:border-black " type="button" data-svelte-h="svelte-1thsjfr">Remove</button> </li>`;
  })}</ul></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const apiURL = "https://vzcllffexqjuhpsvbmtw.supabase.co";
  const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Y2xsZmZleHFqdWhwc3ZibXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMTUyNjcsImV4cCI6MjAzNzg5MTI2N30.qBJD8-lbXfZhZX3pxhI2lPgAkdL9oZ8mzJNX8LwGYrA";
  createClient(apiURL, anonKey);
  let quizFormId;
  let questionFormLength;
  return `<div><h2 class="text-center my-2 text-xl font-semibold" data-svelte-h="svelte-1pmn6f5">Welcome and create a quiz</h2> ${validate_component(QuestionForm, "QuestionForm").$$render($$result, { quizFormId, questionFormLength }, {}, {})}</div>  `;
});
export {
  Page as default
};
