<script>
    import Nav from "../components/Nav.svelte";
    import Blog from "../components/Blog.svelte";
    import { g_selectedItem } from "../components/store";
    import PocketBase from "pocketbase";
    import { onMount, onDestroy } from "svelte";

    // initialize empty posts array
    let posts = [];

    // global variable subscription
    $: selectedItem = $g_selectedItem;

    // https://github.com/pocketbase/js-sdk?tab=readme-ov-file#installation
    // create pocketbase connection object
    // default pocketbase setup with "posts" collection with fields (title, content, user)
    // test recorded created manually with admin UI
    const pb = new PocketBase("http://127.0.0.1:8090");

    // run once on mount (refresh)
    onMount(async () => {
        console.log("mounting...");
        // attempt to pull posts collection data - make sure to grant appropriate endpoint permissions
        try {
            const resultList = await pb.collection("posts").getList(1, 50, {
            sort: "created", // return 1 page up to 50 items sorted by creation time
            });
            posts = resultList.items;
            console.log(posts);  

        } catch (error) {
            console.log(error); //log error
        }
    });

</script>

<div class="wrapper">
    <div class="container">
        <img src="/src/routes/propicsmall.png" alt="selfie">
        <h1>John Steer</h1>
        <Nav />
        {#if selectedItem === 0}
            <p>
                I've recently been binging content from Fireship and ThePrimeTime and
                it made me want to learn how to build web apps so here I am starting
                a journey building my personal site. Forcing myself to write everything
                myself and not use Cursor/Claude so I actually learn things. I tried React
                but idc about job market I think Svelte is cooler so I'm using it.
                I WILL FINISH THIS PROJECT AND DEPLOY IT ON GOOGLE CLOUD RUN!!!!!!!!!!!!! Also doing all the html/css from
                scratch cause it's more fun than having AI generate it. Following along the Svelte 
                interactive tutorial to figure stuff out.
            </p>
        {:else if selectedItem === 1}
            <Blog />
        {:else}
            <!-- Render content field value for returned posts-->
            {#each posts as post (post.id)}
                {post.content}
            {/each}      
        {/if}

    </div>
</div>

<style>
    .wrapper {
        padding: 0 10%;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

