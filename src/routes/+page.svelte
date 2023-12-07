<script lang="ts">
  export let data
  const { siteLastUpdated, pageList, itemList } = data

  import Header from "$lib/components/Header.svelte"
  import List from "$lib/components/List/List.svelte"
</script>

<Header {pageList} {siteLastUpdated} />
<List {itemList} />
