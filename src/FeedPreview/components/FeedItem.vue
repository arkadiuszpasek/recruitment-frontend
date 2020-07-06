<template>
  <div class="feed-item">
    <a :href="this.item.link" target="_blank">
      <div class="container">
        <div class="information">
          <h4 v-html="this.item.title"></h4>
          <p class="meta">Article published: {{this.item.date.toLocaleString()}}</p>
        </div>
        <img :src="this.item.url" class="image" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "FeedItem",
  props: {
    item: {
      title: String,
      url: String,
      date: Date,
      link: String
    }
  }
};
</script>

<style lang="scss" scoped>
.feed-item {
  margin: 1.5rem auto;
  width: 100%;
  min-width: 360px;
  max-width: 960px;
  background-color: #f3f3f3;
  border-radius: 5px;
  text-align: left;

  .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media all and (min-width: 768px) {
      flex-direction: row;
    }
  }

  transition: all 0.15s ease;
  &:hover {
    transform: scale(1.02);
  }
  .meta {
    font-size: 75%;
  }

  .image {
    max-width: 300px;
    max-height: 150px;
    border-radius: 5px;
    margin: 0 1rem;
  }
}
</style>