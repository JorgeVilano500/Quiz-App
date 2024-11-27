<script lang="ts">
    // import bcrypt from 'bcrypt';
  import { onMount } from 'svelte';
    import {supabase} from '../../helpers/supabase';
    import type { UserResponse, User } from '@supabase/auth-js';
    import {userStore} from '$lib/stores/userStore';
    import {QuizEditing} from '$lib/index';

    import FaRegQuestionCircle from 'svelte-icons/fa/FaRegQuestionCircle.svelte'


    let registered = false; 
    let textOrPassword = false;

    let displayName = '';
    let email = ''
    let password = '';
  
    export let sessionInfo : UserResponse;

    // import Counter from './lib/Counter.svelte'
    onMount(async () => {
        const userInfo = await supabase.auth.getUser();
        console.log(userInfo)
        if(userInfo?.data.user != null){
            sessionInfo = userInfo;
            const {data, error} = await supabase.from('user_table').select().eq('user_policy_id', userInfo.data.user?.id)
            
            if(error) console.log('Login Table error', error);
        if(data) {
            userStore.set({
                email: data[0].email,
                user_id: data[0].user_policy_id,
                username: data[0].username 
            })
        } 
    }

    })

    function resetRegistered() {
        registered = !registered;
    }
    function resetTextButton () {
        return !textOrPassword;
    }

    // function hashPassword(event : Event){
    //     event.preventDefault();
    //     const saltRounds = 10

    //     bcrypt.hash(password, saltRounds,  function (err, hash) {
    //         if(err) console.log('Hashing error', err.message)
    //         hashedPassword = hash
    //     } )
    // }
    async function createUser(event: Event) {
        event.preventDefault();
       

        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password, 
            
        })
        if(error){ 
            console.log('Register error', error)
        } else {
            console.log('User is signed in', data)
        }
        const userId = data.user?.id;

        const {data:userData, error: userError} = await supabase.from('user_table')
        .insert([{
            user_policy_id: userId, 
            username: displayName, 
            email: email
        }])
      

        if(userError){
            console.log('Error when creating User in DB', userError.message)
        } else {
            console.log('User is successfully created', userData)
        }
        displayName = ''
        email = ''
        password=''
            
    

    }

    async function loginUser(event: Event) {
        event.preventDefault();
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email, 
            password: password
        })
        if(error) {console.log('login error', error.message)}
        else if(data.user?.aud) {
            const userInfo = await supabase.auth.getUser();
            console.log(userInfo)
            sessionInfo = userInfo;

            userStore.set({
                email: data.user?.email,
                user_id: data.user?.id, 

            })
        }   
    }

    async function logoutUser(event: Event) {
        event.preventDefault();
        const {error} = await supabase.auth.signOut();
        if(error) console.log('signout Error', error.message)
        const userInfo = await supabase.auth.getUser();
            sessionInfo= userInfo;
        $userStore = {
            email: '', 
            user_id: ''
        }
        resetRegistered();


    } 

// add later
// on:change={hashPassword} 
    
</script>



<div >
    {#if sessionInfo != null}
        <section class="bg-slate-200 w-[50%] h-[80vh] mx-auto flex flex-col justify-center gap-4">
            <h3 class="mx-auto w-[50%] text-xl text-center">Welcome! <br /> <span class="font-semibold"> {sessionInfo.data.user?.email}</span></h3>
            <p class="mx-auto w-[50%] text-center"><span class="font-semibold">{$userStore?.username || sessionInfo?.data?.user?.email}</span> Edit your Quizzes</p>
            <!-- Quiz editing component -->
            <QuizEditing userInfo={sessionInfo} />

            <button on:click={logoutUser} class="bg-slate-300 border border-transparent w-[15%] mx-auto rounded-lg py-1 transition ease-in hover:bg-slate-500 hover:border-slate-700 hover:border-[1px]">Log out</button>
        </section>
    
    {:else if registered} 
    <!-- if logged out they will have to sign in -->
        <!-- if they have an account -->
         <div class="flex flex-row justify-center items-center h-[80vh]">
            <div class=" h-[10rem] w-[50%]  ">
                <FaRegQuestionCircle  />
            </div>

            <form on:submit={loginUser} class="flex flex-col w-[50%]">
                <section class="mb-4">
                    <h2 class="text-2xl font-semibold mb-1">Welcome to Truth & Lies</h2>
                    <p class="text-slate-500 text-">Log In and start Playing</p>
                </section>
    
                
              
                <div class="flex flex-col w-[75%]">
                    <label for="email">Email</label>
                    <input bind:value={email} class=" my-2 form-control rounded p-2 border-[1px] h-[100%] w-[100%] outline-none" name="username" type="text" placeholder="Email" />
                </div>
                 
                 <label for="password">Password</label>
                 <div class="w-[75%] flex flex-row border-[1px] justify-between p-2 my-2 rounded"> 
                    <!-- type={textOrPassword ? 'text' : 'password'} -->
                     <!-- to create a way to see the password -->
                     <input bind:value={password} class="form-control  h-[100%] w-[100%] outline-none" name="password"  placeholder="Password"/>
                     <input class="mr-2 " on:click={resetTextButton} bind:value={textOrPassword} bind:checked={textOrPassword} type="checkbox" placeholder="See Password">
                    </div>
                    <button  on:click={resetRegistered} placeholder="Sign In" class="w-[25%] text-start"  > Register</button>
                    <button type="submit" class="rounded-[3rem] px-3 py-2 border  border-transparent bg-slate-200 w-[25%] my-6 transition ease-in hover:bg-slate-400 hover:border-black hover:border-[1px]">Log In</button>
                </form>
            </div>
    <!-- if logged in they will be able to logout and check their info -->
    
    {:else}
    <!-- if there is no account they must register -->
     <div class="flex flex-row justify-center items-center h-[80vh]">
        <div class=" h-[10rem] w-[50%]  ">
            <FaRegQuestionCircle  />
        </div>
         <form on:submit={createUser} class="flex flex-col w-[50%]">
            <section class="mb-4">
                <h2 class="text-2xl font-semibold mb-1">Welcome to Truth & Lies</h2>
                <p class="text-slate-500 text-">Register your account</p>
            </section>

            <div class="flex flex-col w-[75%]">
                <label for="username">Display Name</label>
                <input bind:value={displayName} class=" my-2 form-control rounded p-2 border-[1px] h-[100%] w-[100%] outline-none" name="username" type="text" placeholder="Display Name" />
            </div>
            <div class="flex flex-col w-[75%]">
                <label for="email">Email</label>
                <input bind:value={email} class=" my-2 form-control rounded p-2 border-[1px] h-[100%] w-[100%] outline-none" name="username" type="text" placeholder="Email" />
            </div>
             
             <label for="password">Password</label>
             <div class="w-[75%] flex flex-row border-[1px] justify-between p-2 my-2 rounded"> 
                <!-- type={textOrPassword ? 'text' : 'password'} -->
                 <!-- to create a way to see the password -->
                 <input bind:value={password} class="form-control  h-[100%] w-[100%] outline-none" name="password"  placeholder="Password"/>
                 <input class="mr-2 " on:click={resetTextButton} bind:value={textOrPassword} bind:checked={textOrPassword} type="checkbox" placeholder="See Password">
                </div>
                <button  on:click={resetRegistered} placeholder="Sign In" class="w-[25%] text-start"  > Sign In</button>
                <button type="submit"  class="rounded-[3rem] px-3 py-2 border  border-transparent bg-slate-200 w-[25%] my-6 transition ease-in hover:bg-slate-400 hover:border-black hover:border-[1px]">Sign Up</button>
            </form>
        </div>

    {/if}
</div>

<style>
    .form-control:focus, .form-control:active {
    background: transparent;
}

</style>