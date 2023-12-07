<script lang="ts">
  import type { ItemType } from "$lib/types"
  export let item: ItemType
  console.log(item)
</script>

{#if item.type === "article"}
  <a href={item.slug?.current ?? ""} data-sveltekit-preload-data>
    {item.title}
  </a>
{:else if item.type === "link"}
  <a href={item.link ?? ""} target="_blank">
    {item.title}
  </a>
{:else if item.type === "file"}
  <a href={item.fileUrl ?? ""} target="_blank">
    {item.title}
  </a>
{/if}

<style lang="scss">
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
