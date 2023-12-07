<script lang="ts">
  export let pageList: any[]
  export let siteLastUpdated: string
</script>

<div class="header">
  <h1>Calum Bowden</h1>
  {#each pageList as page}
    <a href={page.slug?.current ?? ""} data-sveltekit-preload-data>
      {page.title}
    </a>
  {/each}
</div>

<style lang="scss">
  .header {
    display: flex;
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid var(--color-border);

    h1 {
      font-size: var(--font-size);
      padding: 0;
      margin: 0;
      margin-right: 1em;
    }

    a {
      color: inherit;
      font-size: var(--font-size);
      margin-right: 1em;
    }
  }
</style>
