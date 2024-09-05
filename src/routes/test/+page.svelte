<script>
    let admin = true;
    let posts = [];
</script>

{#if admin}
    <div style="display: flex;">
        <div>
            {#if posts.length === 0}
                <h1>No Posts</h1>
            {:else}
            {#each posts as post}
                <div class="item">
                    <a href={post.link}>{post.title}</a>
                    <p>{post.author}</p>
                </div> 
            {/each}
            {/if}        
        </div>
        <div>
            <form>
                <div class="vflex">
                    <div class="item">
                        <label for="title">Title:</label>
                        <input id="title" type="text">
                    </div>
                    <div class="item">
                        <label for="author">Author</label>
                        <input id="author" type="text">
                    </div>
                    <div class="item">
                        <label for="link">Link</label>
                        <input id="link" type="text">
                    </div>
                </div>
            </form>
        </div>
    </div>
{:else}
    <div style="display: flex;">
        {#if posts.length === 0}
            <h1>No Posts</h1>
        {:else}
        {#each posts as post}
            <div class="item">
                <a href={post.link}>{post.title}</a>
                <p>{post.author}</p>
            </div> 
        {/each}
        {/if}        
    </div>
{/if}

<style>
    .vflex {
        display: flex;
        flex-direction: column;
    }

    .item {
        display: flex;
        flex: 1;
    }
</style>