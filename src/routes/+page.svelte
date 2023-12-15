<script lang="ts">
  import Header from "$lib/components/Header.svelte"
  import List from "$lib/components/List/List.svelte"
  import Metadata from "$lib/components/Metadata.svelte"
  export let data
  const { siteLastUpdated, pageList, itemList } = data
</script>

<Metadata />
<Header {pageList} {siteLastUpdated} />
<List {itemList} />
