import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/supabase.js";
import { I as IconBase } from "../../chunks/IconBase.js";
const MdQuestionAnswer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 24 24" }, $$props), {}, {
    default: () => {
      return `<path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>`;
    }
  })}`;
});
const FaUserCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 496 512" }, $$props), {}, {
    default: () => {
      return `<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>`;
    }
  })}`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-row justify-between mx-8 my-4 "><p class="flex flex-row w-[16rem] h-[3rem] "><a class="transition ease-in hover:text-slate-300" href="/">${validate_component(MdQuestionAnswer, "MdQuestionAnswer").$$render($$result, {}, {}, {})}</a><span class="w-[100%] self-center text-xl font-semibold " data-svelte-h="svelte-msaj2l">Truth and Lies</span></p> <p class="flex flex-row w-[16rem] h-[3rem] font-semibold"><a class="hover:text-slate-300 self-center w-[100%] h-[100%]" href="/login">${validate_component(FaUserCircle, "FaUserCircle").$$render($$result, {}, {}, {})}</a> <span class="w-[100%] self-center" data-svelte-h="svelte-vffqcm">JAVA Studios</span></p></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
