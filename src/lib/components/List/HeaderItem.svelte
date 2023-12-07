<script lang="ts">
  import { ColumnType, OrderDirection } from "$lib/enums"
  import { orderColumn, orderDirection, SORTABLE_COLUMNS } from "."
  export let title: string
  export let columnType: ColumnType

  const sortable = SORTABLE_COLUMNS.includes(columnType)

  const setOrderColumn = () => {
    if ($orderColumn === columnType) {
      orderDirection.set(
        $orderDirection === OrderDirection.Ascending
          ? OrderDirection.Descending
          : OrderDirection.Ascending,
      )
    } else {
      orderColumn.set(columnType)
      orderDirection.set(OrderDirection.Descending)
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="header-cell {ColumnType[columnType].toLowerCase()}"
  class:sortable
  on:click={setOrderColumn}
>
  {title}
  {#if $orderColumn === columnType}
    {#if $orderDirection === OrderDirection.Ascending}
      ↑
    {:else}
      ↓
    {/if}
  {/if}
</div>

<style lang="scss">
  .header-cell {
    text-align: left;
    user-select: none;
    pointer-events: none;
    font-weight: bold;

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

    &.sortable {
      pointer-events: all;
      cursor: pointer;
    }
  }
</style>
