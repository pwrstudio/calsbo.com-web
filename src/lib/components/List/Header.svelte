<script lang="ts">
  import HeaderItem from "$lib/components/List/HeaderItem.svelte"
  import { columns } from "."
</script>

<tr>
  {#each columns as column}
    <HeaderItem title={column.title} columnType={column.columnType} />
  {/each}
</tr>
