<script>
    import { currentUser, pb} from '../lib/pocketbase';
    let email = "";
    let username = "";
    let password = "";

    async function login() {
        try {
            await pb.collection("users").authWithPassword(username, password);
        } catch (error) {
            console.error("Login error:", error);
        };

    };

    async function signup() {
        const data = {
            username,
            password,
            passwordConfirm: password,
            name: username
        };
        console.log("Trying sign up with", data.email, data.password);
        try {
            const createdUser = await pb.collection("users").create(data);
            await login();
        } catch (error) {
            console.error("Sign up error", error);
        };

    };

    function signOut() {
        pb.authStore.clear();
    };

</script>

{#if $currentUser}
    welcome {$currentUser.username}!
{:else}
    <form on:submit|preventDefault>
        <input bind:value={email} type="email" name="email" id="email" placeholder="email" />
        <input bind:value={username} type="text" name="name" id="name" placeholder="username" required />
        <input bind:value={password} type="password" placeholder="password" required />
        <button on:click={signup}>Sign Up</button>
        <button on:click={login}>Login</button>
    </form>
{/if}
