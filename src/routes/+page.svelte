<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity"
  import { formatDateTime } from "$lib/modules/date.js"
  export let data
  const { siteLastUpdated, about, contact, list } = data
</script>

<h1>Calum Bowden</h1>
<div>Site last updated at {formatDateTime(siteLastUpdated)}</div>

{#if about.content?.content}
  {@html renderBlockText(about.content.content)}
{/if}

{#if contact.content?.content}
  {@html renderBlockText(contact.content.content)}
{/if}

{#each list as item}
  <div class="item">
    <h2>{item.title}</h2>
  </div>
{/each}
