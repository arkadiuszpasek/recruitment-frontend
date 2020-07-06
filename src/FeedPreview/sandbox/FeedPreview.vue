<template>
  <div class="feed-preview">
    <p>Feed preview</p>
    <FeedPreview url="https://www.gamespot.com/feeds/mashup/"></FeedPreview>
    <!-- <FeedPreview url="https://news.yahoo.com/rss/"></FeedPreview> -->
  </div>
</template>

<script>
import FeedPreview from "../src/FeedPreview";

export default {
  name: "FeedPreviewSandbox",
  components: {
    FeedPreview
  }
};
</script>
