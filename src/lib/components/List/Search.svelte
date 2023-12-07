<script lang="ts">
  import { searchTerm } from "."

  let term = ""

  $: term = $searchTerm

  const handleInput = () => {
    searchTerm.set(term)
  }
</script>

<div class="search">
  <input
    type="text"
    placeholder="Search"
    bind:value={term}
    on:input={handleInput}
  />
  <button on:click={() => searchTerm.set("")}>Clear</button>
</div>

<style lang="scss">
  .search {
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
