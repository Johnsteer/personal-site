<script>
    import Nav from "../components/Nav.svelte";
    import Blog from "../components/Blog.svelte";
    import { g_selectedItem } from "../components/store";

    $: selectedItem = $g_selectedItem;

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
            Stuff I'm building        
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

