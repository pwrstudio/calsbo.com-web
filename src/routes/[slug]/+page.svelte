<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity.js"
  import Footer from "$lib/components/Footer.svelte"
  export let data
  const { post, pageList, siteLastUpdated } = data
</script>

<h1>{post.title}</h1>

<div>{@html renderBlockText(post.content?.content ?? [])}</div>

<Footer {pageList} {siteLastUpdated} />
