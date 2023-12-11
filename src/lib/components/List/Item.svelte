<script lang="ts">
  import Tags from "$lib/components/List/Tags.svelte"
  import type { ItemType } from "$lib/types"
  export let item: ItemType

  function getLink() {
    if (item.type === "article") {
      return {
        url: item.slug?.current ?? "",
        target: "",
      }
    } else if (item.type === "link") {
      return {
        url: item.link ?? "",
        target: "_blank",
      }
    } else if (item.type === "file") {
      return {
        url: item.fileUrl ?? "",
        target: "_blank",
      }
    } else {
      return {
        url: "",
        target: "",
      }
    }
  }

  let link = getLink()
</script>

<a href={link.url} target={link.target} class="row">
  <div class="cell title">{item.title}</div>
  <div class="cell what"><Tags tags={item.what ?? []} /></div>
  <div class="cell with"><Tags tags={item.with ?? []} /></div>
  <div class="cell where">{item.where ?? ""}</div>
  <div class="cell when">{item.when ?? ""}</div>
</a>

<style lang="scss">
  .row {
    display: flex;
    padding-bottom: 1em;
    padding-top: 1em;
    border-bottom: 1px solid var(--color-border);
    text-decoration: none;
    color: inherit;

    &:hover {
      background-color: var(--color-border);
    }

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
