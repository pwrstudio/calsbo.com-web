<script lang="ts">
  import Tags from "$lib/components/List/Tags.svelte"
  import ItemLink from "$lib/components/List/ItemLink.svelte"
  import type { ItemType } from "$lib/types"
  export let item: ItemType
</script>

<div class="row">
  <div class="cell title"><ItemLink {item} /></div>
  <div class="cell what"><Tags tags={item.what ?? []} /></div>
  <div class="cell with"><Tags tags={item.with ?? []} /></div>
  <div class="cell where">{item.where ?? ""}</div>
  <div class="cell when">{item.when ?? ""}</div>
</div>

<style lang="scss">
  .row {
    display: flex;
    padding-bottom: 1em;
    padding-top: 1em;
    border-bottom: 1px solid var(--color-border);

    .cell {
      &.title {
        width: 30%;
      }
      &.what {
        width: 20%;
      }
      &.with {
        width: 20%;
      }
      &.where {
        width: 20%;
      }
      &.when {
        width: 10%;
      }
    }
  }
</style>
