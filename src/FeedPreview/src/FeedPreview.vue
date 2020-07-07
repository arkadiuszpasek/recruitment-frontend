<template>
  <div class="feed">
    <div v-if="this.isLoading">
      <LoadingSpinner />
    </div>
    <div v-else>
      <div v-if="this.rssItems.length">
        <input placeholder="Search by title..." @input="onInput" />
        <FeedItem :key="item.title" :item="item" v-for="item in matchingItems" />
      </div>
      <div v-else>
        <FeedError @reload="this.fetchItems" />
      </div>
    </div>
  </div>
</template>

<script>
import FeedItem from "../components/FeedItem";
import FeedError from "../components/FeedError";
import LoadingSpinner from "../components/LoadingSpinner";

const RSS_PROXY = "https://arkadiuszpasek-rss-proxy.herokuapp.com/rss";

export default {
  name: "FeedPreview",
  components: { FeedItem, FeedError, LoadingSpinner },
  data() {
    return {
      rssItems: [],
      searchInput: "",
      isLoading: false
    };
  },
  props: {
    url: String
  },
  created() {
    this.fetchItems();
  },
  computed: {
    matchingItems() {
      return this.rssItems.filter(({ title }) => {
        const regex = new RegExp(`${this.searchInput}`, "gi");
        return regex.test(title);
      });
    }
  },
  watch: {
    url() {
      this.fetchItems();
    }
  },
  methods: {
    onInput(e) {
      this.searchInput = e.target.value;
    },
    async fetchItems() {
      this.isLoading = true;

      try {
        const fetchUrl = encodeURIComponent(this.url);
        const res = await fetch(`${RSS_PROXY}/?url=${fetchUrl}`);
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
            linkUrl: link ? link.textContent : "",
            mediaUrl: media ? media.getAttribute("url") : "",
            date: date ? new Date(date.textContent) : null
          };
        });
      } catch (err) {
        //
      } finally {
        this.isLoading = false;
      }
    }
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