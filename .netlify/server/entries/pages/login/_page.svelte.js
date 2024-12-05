import { c as create_ssr_component, v as validate_component, d as each, e as escape, b as add_attribute, a as subscribe } from "../../../chunks/ssr.js";
import "../../../chunks/supabase.js";
import { u as userStore } from "../../../chunks/userStore.js";
import { I as IconBase } from "../../../chunks/IconBase.js";
const FaThumbsUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path>`;
    }
  })}`;
});
const QuizEditing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { userInfo } = $$props;
  let userQuizzes = [];
  if ($$props.userInfo === void 0 && $$bindings.userInfo && userInfo !== void 0) $$bindings.userInfo(userInfo);
  return `<div class="w-[70%] bg-slate-400 rounded-lg mx-auto"><h3 class="m-2 font-semibold" data-svelte-h="svelte-1rtip0k">Your Quizzes</h3> <div class="w-[100%] h-[10rem] overflow-y-auto ">${each(userQuizzes, (quiz, i) => {
    return `<div class="bg-slate-200 w-[80%] mx-auto my-2 p-2 rounded-lg flex flex-row justify-between ">${` <p class="flex flex-row gap-2 w-[11rem] h-[2rem] "><span class="bg-slate-500 p-1 rounded ">${escape(i + 1)}</span> <span class="w-[100%] self-center truncate">${escape(quiz.quiz_name)}</span> </p>`} <section class="group flex flex-row justify-center"><input type="color" class="p-1 bg-slate-500 rounded self-center mx-2 h-[2rem] w-[2rem]" aria-label="Select a color"${add_attribute("value", quiz.color_hex, 0)}>  ${``}</section> <section class="self-center flex flex-row gap-3 "><div class="self-center w-[1rem] h-[1rem]">${validate_component(FaThumbsUp, "FaThumbsUp").$$render($$result, {}, {}, {})}</div> ${escape(quiz.likes)}</section> </div>`;
  })}</div></div>`;
});
const FaRegQuestionCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>`;
    }
  })}`;
});
const css = {
  code: ".form-control.svelte-7ip0w8:focus,.form-control.svelte-7ip0w8:active{background:transparent}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { supabase } from \\"../../helpers/supabase\\";\\nimport { userStore } from \\"$lib/stores/userStore\\";\\nimport { QuizEditing } from \\"$lib/index\\";\\nimport FaRegQuestionCircle from \\"svelte-icons/fa/FaRegQuestionCircle.svelte\\";\\nlet registered = false;\\nlet textOrPassword = false;\\nlet displayName = \\"\\";\\nlet email = \\"\\";\\nlet password = \\"\\";\\nexport let sessionInfo;\\nonMount(async () => {\\n  const userInfo = await supabase.auth.getUser();\\n  console.log(userInfo);\\n  if (userInfo?.data.user != null) {\\n    sessionInfo = userInfo;\\n    const { data, error } = await supabase.from(\\"user_table\\").select().eq(\\"user_policy_id\\", userInfo.data.user?.id);\\n    if (error) console.log(\\"Login Table error\\", error);\\n    if (data) {\\n      userStore.set({\\n        email: data[0].email,\\n        user_id: data[0].user_policy_id,\\n        username: data[0].username\\n      });\\n    }\\n  }\\n});\\nfunction resetRegistered() {\\n  registered = !registered;\\n}\\nfunction resetTextButton() {\\n  return !textOrPassword;\\n}\\nasync function createUser(event) {\\n  event.preventDefault();\\n  const { data, error } = await supabase.auth.signUp({\\n    email,\\n    password\\n  });\\n  if (error) {\\n    console.log(\\"Register error\\", error);\\n  } else {\\n    console.log(\\"User is signed in\\", data);\\n  }\\n  const userId = data.user?.id;\\n  const { data: userData, error: userError } = await supabase.from(\\"user_table\\").insert([{\\n    user_policy_id: userId,\\n    username: displayName,\\n    email\\n  }]);\\n  if (userError) {\\n    console.log(\\"Error when creating User in DB\\", userError.message);\\n  } else {\\n    console.log(\\"User is successfully created\\", userData);\\n  }\\n  displayName = \\"\\";\\n  email = \\"\\";\\n  password = \\"\\";\\n}\\nasync function loginUser(event) {\\n  event.preventDefault();\\n  const { data, error } = await supabase.auth.signInWithPassword({\\n    email,\\n    password\\n  });\\n  if (error) {\\n    console.log(\\"login error\\", error.message);\\n  } else if (data.user?.aud) {\\n    const userInfo = await supabase.auth.getUser();\\n    console.log(userInfo);\\n    sessionInfo = userInfo;\\n    userStore.set({\\n      email: data.user?.email,\\n      user_id: data.user?.id\\n    });\\n  }\\n}\\nasync function logoutUser(event) {\\n  event.preventDefault();\\n  const { error } = await supabase.auth.signOut();\\n  if (error) console.log(\\"signout Error\\", error.message);\\n  const userInfo = await supabase.auth.getUser();\\n  sessionInfo = userInfo;\\n  $userStore = {\\n    email: \\"\\",\\n    user_id: \\"\\"\\n  };\\n  resetRegistered();\\n}\\n<\/script>\\r\\n\\r\\n\\r\\n\\r\\n<div >\\r\\n    {#if sessionInfo != null}\\r\\n        <section class=\\"bg-slate-200 w-[50%] h-[80vh] mx-auto flex flex-col justify-center gap-4\\">\\r\\n            <h3 class=\\"mx-auto w-[50%] text-xl text-center\\">Welcome! <br /> <span class=\\"font-semibold\\"> {sessionInfo.data.user?.email}</span></h3>\\r\\n            <p class=\\"mx-auto w-[50%] text-center\\"><span class=\\"font-semibold\\">{$userStore?.username || sessionInfo?.data?.user?.email}</span> Edit your Quizzes</p>\\r\\n            <!-- Quiz editing component -->\\r\\n            <QuizEditing userInfo={sessionInfo} />\\r\\n\\r\\n            <button on:click={logoutUser} class=\\"bg-slate-300 border border-transparent w-[15%] mx-auto rounded-lg py-1 transition ease-in hover:bg-slate-500 hover:border-slate-700 hover:border-[1px]\\">Log out</button>\\r\\n        </section>\\r\\n    \\r\\n    {:else if registered} \\r\\n    <!-- if logged out they will have to sign in -->\\r\\n        <!-- if they have an account -->\\r\\n         <div class=\\"flex flex-row justify-center items-center h-[80vh]\\">\\r\\n            <div class=\\" h-[10rem] w-[50%]  \\">\\r\\n                <FaRegQuestionCircle  />\\r\\n            </div>\\r\\n\\r\\n            <form on:submit={loginUser} class=\\"flex flex-col w-[50%]\\">\\r\\n                <section class=\\"mb-4\\">\\r\\n                    <h2 class=\\"text-2xl font-semibold mb-1\\">Welcome to Truth & Lies</h2>\\r\\n                    <p class=\\"text-slate-500 text-\\">Log In and start Playing</p>\\r\\n                </section>\\r\\n    \\r\\n                \\r\\n              \\r\\n                <div class=\\"flex flex-col w-[75%]\\">\\r\\n                    <label for=\\"email\\">Email</label>\\r\\n                    <input bind:value={email} class=\\" my-2 form-control rounded p-2 border-[1px] h-[100%] w-[100%] outline-none\\" name=\\"username\\" type=\\"text\\" placeholder=\\"Email\\" />\\r\\n                </div>\\r\\n                 \\r\\n                 <label for=\\"password\\">Password</label>\\r\\n                 <div class=\\"w-[75%] flex flex-row border-[1px] justify-between p-2 my-2 rounded\\"> \\r\\n                    <!-- type={textOrPassword ? 'text' : 'password'} -->\\r\\n                     <!-- to create a way to see the password -->\\r\\n                     <input bind:value={password} class=\\"form-control  h-[100%] w-[100%] outline-none\\" name=\\"password\\"  placeholder=\\"Password\\"/>\\r\\n                     <input class=\\"mr-2 \\" on:click={resetTextButton} bind:value={textOrPassword} bind:checked={textOrPassword} type=\\"checkbox\\" placeholder=\\"See Password\\">\\r\\n                    </div>\\r\\n                    <button  on:click={resetRegistered} placeholder=\\"Sign In\\" class=\\"w-[25%] text-start\\"  > Register</button>\\r\\n                    <button type=\\"submit\\" class=\\"rounded-[3rem] px-3 py-2 border  border-transparent bg-slate-200 w-[25%] my-6 transition ease-in hover:bg-slate-400 hover:border-black hover:border-[1px]\\">Log In</button>\\r\\n                </form>\\r\\n            </div>\\r\\n    <!-- if logged in they will be able to logout and check their info -->\\r\\n    \\r\\n    {:else}\\r\\n    <!-- if there is no account they must register -->\\r\\n     <div class=\\"flex flex-row justify-center items-center h-[80vh]\\">\\r\\n        <div class=\\" h-[10rem] w-[50%]  \\">\\r\\n            <FaRegQuestionCircle  />\\r\\n        </div>\\r\\n         <form on:submit={createUser} class=\\"flex flex-col w-[50%]\\">\\r\\n            <section class=\\"mb-4\\">\\r\\n                <h2 class=\\"text-2xl font-semibold mb-1\\">Welcome to Truth & Lies</h2>\\r\\n                <p class=\\"text-slate-500 text-\\">Register your account</p>\\r\\n            </section>\\r\\n\\r\\n            <div class=\\"flex flex-col w-[75%]\\">\\r\\n                <label for=\\"username\\">Display Name</label>\\r\\n                <input bind:value={displayName} class=\\" my-2 form-control rounded p-2 border-[1px] h-[100%] w-[100%] outline-none\\" name=\\"username\\" type=\\"text\\" placeholder=\\"Display Name\\" />\\r\\n            </div>\\r\\n            <div class=\\"flex flex-col w-[75%]\\">\\r\\n                <label for=\\"email\\">Email</label>\\r\\n                <input bind:value={email} class=\\" my-2 form-control rounded p-2 border-[1px] h-[100%] w-[100%] outline-none\\" name=\\"username\\" type=\\"text\\" placeholder=\\"Email\\" />\\r\\n            </div>\\r\\n             \\r\\n             <label for=\\"password\\">Password</label>\\r\\n             <div class=\\"w-[75%] flex flex-row border-[1px] justify-between p-2 my-2 rounded\\"> \\r\\n                <!-- type={textOrPassword ? 'text' : 'password'} -->\\r\\n                 <!-- to create a way to see the password -->\\r\\n                 <input bind:value={password} class=\\"form-control  h-[100%] w-[100%] outline-none\\" name=\\"password\\"  placeholder=\\"Password\\"/>\\r\\n                 <input class=\\"mr-2 \\" on:click={resetTextButton} bind:value={textOrPassword} bind:checked={textOrPassword} type=\\"checkbox\\" placeholder=\\"See Password\\">\\r\\n                </div>\\r\\n                <button  on:click={resetRegistered} placeholder=\\"Sign In\\" class=\\"w-[25%] text-start\\"  > Sign In</button>\\r\\n                <button type=\\"submit\\"  class=\\"rounded-[3rem] px-3 py-2 border  border-transparent bg-slate-200 w-[25%] my-6 transition ease-in hover:bg-slate-400 hover:border-black hover:border-[1px]\\">Sign Up</button>\\r\\n            </form>\\r\\n        </div>\\r\\n\\r\\n    {/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .form-control:focus, .form-control:active {\\r\\n    background: transparent;\\r\\n}\\r\\n\\r\\n</style>"],"names":[],"mappings":"AA+KI,2BAAa,MAAM,CAAE,2BAAa,OAAQ,CAC1C,UAAU,CAAE,WAChB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let textOrPassword = false;
  let displayName = "";
  let email = "";
  let password = "";
  let { sessionInfo } = $$props;
  if ($$props.sessionInfo === void 0 && $$bindings.sessionInfo && sessionInfo !== void 0) $$bindings.sessionInfo(sessionInfo);
  $$result.css.add(css);
  $$unsubscribe_userStore();
  return `<div>${sessionInfo != null ? `<section class="bg-slate-200 w-[50%] h-[80vh] mx-auto flex flex-col justify-center gap-4"><h3 class="mx-auto w-[50%] text-xl text-center">Welcome! <br> <span class="font-semibold">${escape(sessionInfo.data.user?.email)}</span></h3> <p class="mx-auto w-[50%] text-center"><span class="font-semibold">${escape($userStore?.username || sessionInfo?.data?.user?.email)}</span> Edit your Quizzes</p>  ${validate_component(QuizEditing, "QuizEditing").$$render($$result, { userInfo: sessionInfo }, {}, {})} <button class="bg-slate-300 border border-transparent w-[15%] mx-auto rounded-lg py-1 transition ease-in hover:bg-slate-500 hover:border-slate-700 hover:border-[1px]" data-svelte-h="svelte-4xyef8">Log out</button></section>` : `${` <div class="flex flex-row justify-center items-center h-[80vh]"><div class="h-[10rem] w-[50%] ">${validate_component(FaRegQuestionCircle, "FaRegQuestionCircle").$$render($$result, {}, {}, {})}</div> <form class="flex flex-col w-[50%]"><section class="mb-4" data-svelte-h="svelte-t5ityw"><h2 class="text-2xl font-semibold mb-1">Welcome to Truth &amp; Lies</h2> <p class="text-slate-500 text-">Register your account</p></section> <div class="flex flex-col w-[75%]"><label for="username" data-svelte-h="svelte-1rukknj">Display Name</label> <input class="my-2 form-control rounded p-2 border-[1px] h-[100%] w-[100%] outline-none svelte-7ip0w8" name="username" type="text" placeholder="Display Name"${add_attribute("value", displayName, 0)}></div> <div class="flex flex-col w-[75%]"><label for="email" data-svelte-h="svelte-1p9d3fm">Email</label> <input class="my-2 form-control rounded p-2 border-[1px] h-[100%] w-[100%] outline-none svelte-7ip0w8" name="username" type="text" placeholder="Email"${add_attribute("value", email, 0)}></div> <label for="password" data-svelte-h="svelte-pepa0a">Password</label> <div class="w-[75%] flex flex-row border-[1px] justify-between p-2 my-2 rounded">  <input class="form-control h-[100%] w-[100%] outline-none svelte-7ip0w8" name="password" placeholder="Password"${add_attribute("value", password, 0)}> <input class="mr-2 " type="checkbox" placeholder="See Password"${add_attribute("value", textOrPassword, 0)}${add_attribute("checked", textOrPassword, 1)}></div> <button placeholder="Sign In" class="w-[25%] text-start" data-svelte-h="svelte-xbev1y">Sign In</button> <button type="submit" class="rounded-[3rem] px-3 py-2 border border-transparent bg-slate-200 w-[25%] my-6 transition ease-in hover:bg-slate-400 hover:border-black hover:border-[1px]" data-svelte-h="svelte-mnre1i">Sign Up</button></form></div>`}`} </div>`;
});
export {
  Page as default
};
