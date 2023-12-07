<script lang="ts">
  import { formatDateTime } from "$lib/modules/date.js"
  export let siteLastUpdated: string
</script>

<div class="last-updated">
  Site last updated at {formatDateTime(siteLastUpdated)}
</div>

<style lang="scss">
  .last-updated {
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    margin-bottom: 1em;
    font-size: 12px;
  }
</style>
