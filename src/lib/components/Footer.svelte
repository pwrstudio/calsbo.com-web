<script lang="ts">
  import LastUpdated from "./LastUpdated.svelte"
  export let pageList: any[]
  export let siteLastUpdated: string
</script>

<hr />

<div class="footer">
  <h1>Calum Bowden</h1>
  {#each pageList as page}
    <a href={page.slug?.current ?? ""} data-sveltekit-preload-data>
      {page.title}
    </a>
  {/each}
</div>

<LastUpdated {siteLastUpdated} />

<style lang="scss">
  .footer {
    display: flex;
    margin-bottom: 1em;

    h1 {
      font-size: var(--font-size);
      padding: 0;
      margin: 0;
      margin-right: 1em;
    }

    a {
      font-size: var(--font-size);
      margin-right: 1em;
    }
  }
</style>
