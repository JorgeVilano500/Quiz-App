import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/supabase.js";
import { createClient } from "@supabase/supabase-js";
import { F as FaSpinner } from "../../../../chunks/FaSpinner.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const apiURL = "https://vzcllffexqjuhpsvbmtw.supabase.co";
  const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Y2xsZmZleHFqdWhwc3ZibXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMTUyNjcsImV4cCI6MjAzNzg5MTI2N30.qBJD8-lbXfZhZX3pxhI2lPgAkdL9oZ8mzJNX8LwGYrA";
  createClient(apiURL, anonKey);
  $page.params.quizId;
  $$unsubscribe_page();
  return `<section><h1 class="m-auto text-center py-4" data-svelte-h="svelte-99sq0b">You have a limited amount of time for Questions</h1> ${`<div class="animate-spin w-[5rem] h-[5rem] m-auto">${validate_component(FaSpinner, "FaSpinner").$$render($$result, {}, {}, {})}</div>`} </section>`;
});
export {
  Page as default
};
