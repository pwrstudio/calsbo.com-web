<script lang="ts">
  import { searchTerm, baseList, orderedList } from "."

  let term = ""

  $: term = $searchTerm

  const handleInput = () => {
    searchTerm.set(term)
  }
</script>

<div class="search">
  <input
    type="text"
    placeholder="Filter"
    bind:value={term}
    on:input={handleInput}
  />

  <button on:click={() => searchTerm.set("")}>X</button>
  <div class="count">{$orderedList.length}/{$baseList.length} shown</div>
</div>

<style lang="scss">
  .search {
    margin-top: 2em;
    margin-bottom: 2em;
    display: flex;

    input {
      font-family: var(--font-family);
      border: 1px solid var(--color-border);
      outline: none;
      padding: 0.5em;
      margin-right: 0.5em;
    }

    button {
      font-family: var(--font-family);
      border: 1px solid var(--color-border);
      outline: none;
      padding: 0.5em;
      margin-right: 0.5em;
      cursor: pointer;
      background: var(--white);

      &:hover {
        background: var(--color-border);
      }
    }

    .count {
      font-family: var(--font-family);
      border: 1px solid var(--color-border);
      outline: none;
      padding: 0.5em;
      margin-right: 0.5em;
    }
  }
</style>
