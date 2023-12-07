<script lang="ts">
  import { ColumnType, OrderDirection } from "$lib/enums"
  import {
    orderColumn,
    orderDirection,
    SORTABLE_COLUMNS,
    FILTERABLE_COLUMNS,
  } from "."
  export let title: string
  export let columnType: ColumnType

  const sortable = SORTABLE_COLUMNS.includes(columnType)
  const filterable = FILTERABLE_COLUMNS.includes(columnType)

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

<th class:sortable on:click={setOrderColumn}>
  {#if $orderColumn === columnType}
    {#if $orderDirection === OrderDirection.Ascending}
      (u)
    {:else}
      (d)
    {/if}
  {/if}
  {title}
</th>

<style lang="scss">
  th {
    text-align: left;
    user-select: none;
    pointer-events: none;

    &.sortable {
      pointer-events: all;
      cursor: pointer;
    }
  }
</style>
