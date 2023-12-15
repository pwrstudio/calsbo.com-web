<script lang="ts">
  import { formatDateTime } from "$lib/modules/date.js"
  export let siteLastUpdated: string
</script>

<div class="last-updated">
  Site last updated at {formatDateTime(siteLastUpdated)}
</div>

<style lang="scss">
  @import "../styles/responsive.scss";

  .last-updated {
    font-family: Courier, monospace;
    // background: rgb(255, 255, 0);
    padding: 2px;
    font-size: 10px;
    position: relative;
    top: 2px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;

    @include screen-size("phone") {
      display: none;
    }
  }
</style>
