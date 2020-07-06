<template>
  <div class="feed">
    <div v-if="this.rssItems.length">
      <input placeholder="Search by title..." @input="onInput" />
      <FeedItem :key="item.title" :item="item" v-for="item in matchingItems" />
    </div>
    <div v-if="!this.rssItems.length">
      <ErrorDisplay @reload="this.fetchItems" />
    </div>
  </div>
</template>

<script>
import FeedItem from "../components/FeedItem";
import ErrorDisplay from "../components/ErrorDisplay";

export default {
  name: "FeedPreview",
  components: { FeedItem, ErrorDisplay },
  computed: {
    matchingItems() {
      return this.rssItems.filter(({ title }) => {
        const regex = new RegExp(`^${this.input}`, "gi");
        return regex.test(title);
      });
    }
  },
  methods: {
    onInput(e) {
      this.input = e.target.value;
    },
    async fetchItems() {
      try {
        const res = await fetch(this.url, { mode: "cors" });
        const data = await res.text();
        const rss = await new window.DOMParser().parseFromString(
          data,
          "text/xml"
        );

        this.rssItems = Array.from(rss.querySelectorAll("item")).map(item => {
          const title = item.querySelector("title");
          const link = item.querySelector("link");
          const media = item.querySelector("content");
          const date = item.querySelector("pubDate");

          return {
            title: title ? title.textContent : "",
            link: link ? link.textContent : "",
            url: media ? media.getAttribute("url") : "",
            date: date ? new Date(date.textContent) : null
          };
        });
      } catch (err) {
        //
      }
    }
  },
  async created() {
    this.fetchItems();
  },
  props: {
    url: String
  },
  data() {
    return {
      rssItems: [],
      input: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.feed {
  text-align: center;
  margin: 1rem;

  input {
    padding: 0.5rem 5rem;
    text-align: center;
    font-size: 120%;
    border-radius: 5px;
    border: solid #f3f3f3;
  }
}
</style>