<script>
    let selectedItem = 0;
    function handleClick(index) {
        selectedItem = index;
    }
</script>


<div class="container">
    <button on:click={() => handleClick(0)} class="item" class:selected={selectedItem === 0}>What I'm up to...</button>
    <button on:click={() => handleClick(1)} class="item" class:selected={selectedItem === 1}>What I'm reading...</button>
    <button on:click={() => handleClick(2)} class="item" class:selected={selectedItem === 2}>What I'm building...</button>
</div>


<style>
    .container {
        display: flex;
        width: 100%;
        
    }

    .item {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        height: 30px;
        border: 1px solid black;
    }

    .item.selected {
        background-color: dimgrey;
    }


</style>