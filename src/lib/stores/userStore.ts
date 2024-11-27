import { writable } from "svelte/store";
import type {UserInfo} from "../api";

export const userStore = writable<UserInfo | null>(null);