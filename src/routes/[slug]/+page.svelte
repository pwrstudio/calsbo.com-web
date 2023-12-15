<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import Metadata from "$lib/components/Metadata.svelte"
  import type { ItemType } from "$lib/types"
  export let data
  const { pageList, siteLastUpdated } = data

  let currentPost: ItemType = data.post
  $: currentPost = data.post
</script>

{#key currentPost}
  <Metadata page={currentPost} />
{/key}

<Header {pageList} {siteLastUpdated} />

<h1>{currentPost.title}</h1>

<div class="content">
  {@html renderBlockText(currentPost.content?.content ?? [])}
</div>

<Footer {pageList} {siteLastUpdated} />

<style lang="scss">
  h1 {
    margin-top: 2em;
    font-size: var(--font-size);
    margin-bottom: 0.5em;
  }

  .content {
    margin-top: 2em;
    min-height: 100vh;
    max-width: 70ch;
    font-family: "Times New Roman", Times, serif;
  }
</style>
