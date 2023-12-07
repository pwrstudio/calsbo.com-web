<script lang="ts">
  import Item from "$lib/components/List/Item.svelte"
  import Header from "$lib/components/List/Header.svelte"
  import Search from "$lib/components/List/Search.svelte"
  import type { ItemType } from "$lib/types"
  import { baseList, orderedList } from "."
  export let itemList: ItemType[] = []

  baseList.set(itemList)
</script>

<Search />

<table>
  <Header />
  {#each $orderedList as item}
    <Item {item} />
  {/each}
</table>

<style>
  table {
    border-spacing: 0 20px;
    width: 100%;
  }
</style>
