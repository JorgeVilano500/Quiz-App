import pkg from '@supabase/supabase-js';
const { createClient, SupabaseClient } = pkg;
import { getContext, setContext } from "svelte";

export const SUPABASE_KEY = 'supabase';
type SupabaseClientType = typeof SupabaseClient;

export function setSupabaseContext(client: SupabaseClientType) {
    setContext<SupabaseClientType>(SUPABASE_KEY, client)
}

export function getSupaBaseContext():SupabaseClientType{
    const client = getContext<SupabaseClientType>(SUPABASE_KEY); 
    if(!client) {
        throw new Error("Supabase client is not set correctly")
    }
    return client;
}