<script lang="ts">
  import { arrayToString } from "$lib/modules/utils"
  import type { ItemType } from "$lib/types"
  import { renderBlockText } from "$lib/modules/sanity.js"

  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import Metadata from "$lib/components/Metadata.svelte"

  export let data
  const { pageList, siteLastUpdated } = data

  let currentPost: ItemType = data.post
  $: currentPost = data.post
</script>

{#key currentPost}
  <Metadata page={currentPost} globalPage={pageList} />
{/key}

<Header pageList={pageList.pages} {siteLastUpdated} />

<div class="title-section">
  <p class="subtitle">{currentPost.when}</p>
  <h1>{currentPost.title}</h1>
  <p class="subtitle">with {arrayToString(currentPost.with)}</p>
</div>

<div class="content">
  {@html renderBlockText(currentPost.content?.content ?? [])}
</div>

<Footer pageList={pageList.pages} {siteLastUpdated} />

<style lang="scss">
  .title-section {
    margin-bottom: 0.5em;
    padding-bottom: 1em;
    max-width: 70ch;
    border-bottom: 1px dashed var(--color-border);
  }

  h1 {
    margin-top: 0;
    font-size: var(--font-size);
    font-weight: normal;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
    font-size: var(--font-size-small);
    color: var(--color-emphasis);
  }

  .content {
    margin-top: 2em;
    min-height: 100vh;
    max-width: 70ch;
  }
</style>
