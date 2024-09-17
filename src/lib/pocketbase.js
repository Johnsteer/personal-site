import PocketBase from "pocketbase";
import { writable } from "svelte/store";   

export const pb = new PocketBase("http://127.0.0.1:8090");

// If user is not logged in it will return null, otherwise will return username
export const currentUser = writable(pb.authStore.model);

// Listen to onChange event and execute callback function when authStore is changed (user signs in)
pb.authStore.onChange((auth) => {
    console.log("authStore changed", auth);
    // Update currenUser with the new authStore state
    currentUser.set(pb.authStore.model);
});