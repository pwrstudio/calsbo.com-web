<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity"
  export let data
  const { about, contact, list } = data
</script>

<h1>Calum Bowden</h1>

{#if about.content?.content}
  {@html renderBlockText(about.content.content)}
{/if}

{#if contact.content?.content}
  {@html renderBlockText(contact.content.content)}
{/if}
