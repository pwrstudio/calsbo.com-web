<script lang="ts">
  import Tags from "$lib/components/List/Tags.svelte"
  import ItemLink from "$lib/components/List/ItemLink.svelte"
  import type { ItemType } from "$lib/types"
  export let item: ItemType
</script>

<tr>
  <td class="title"><ItemLink {item} /></td>
  <td class="what"><Tags tags={item.what ?? []} /></td>
  <td class="with"><Tags tags={item.with ?? []} /></td>
  <td class="where">{item.where ?? ""}</td>
  <td class="when">{item.when ?? ""}</td>
</tr>

<style lang="scss">
  tr {
    td {
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
