<script lang="ts">
  import Header from "$lib/components/Header.svelte"
  import List from "$lib/components/List/List.svelte"
  import Metadata from "$lib/components/Metadata.svelte"
  import IntroText from "$lib/components/IntroText.svelte"
  export let data
  const { siteLastUpdated, pageList, itemList } = data
</script>

<Metadata globalPage={pageList} />
<Header pageList={pageList.pages} {siteLastUpdated} />
<IntroText {pageList} />
<List {itemList} />
