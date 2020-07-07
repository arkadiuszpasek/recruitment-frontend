<template>
  <div class="feed-preview">
    <p>Feed preview, if you want to change url paste it below, (current url: {{this.url}})</p>
    <input @input="changeUrl" />
    <div class="sandbox-end">Sandbox end</div>
    <FeedPreview :url="this.url"></FeedPreview>
  </div>
</template>

<script>
import FeedPreview from "../src/FeedPreview";

export default {
  name: "FeedPreviewSandbox",
  components: {
    FeedPreview
  },
  data() {
    return {
      url: "https://www.gamespot.com/feeds/mashup/"
      // url: 'https://news.yahoo.com/rss/'
      // url: "https://www.theguardian.com/world/rss"
      // url: 'https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml'
    };
  },
  methods: {
    changeUrl(e) {
      this.url = e.target.value;
    }
  }
};
</script>

<style lang="scss">
.feed-preview {
  text-align: center;
}
.sandbox-end {
  border-bottom: 5px dashed black;
  padding: 1rem 0;
}
</style>
