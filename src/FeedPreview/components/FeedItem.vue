<template>
  <div class="feed-item">
    <a :href="this.item.linkUrl" target="_blank">
      <div class="container">
        <div class="information">
          <h4 v-html="this.item.title"></h4>
          <p class="meta">Article published: {{this.item.date.toLocaleString()}}</p>
        </div>
        <img v-if="this.item.mediaUrl" :src="this.item.mediaUrl" class="image" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "FeedItem",
  props: {
    item: {
      mediaUrl: String,
      date: {
        type: Date,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      linkUrl: {
        type: String,
        required: true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.feed-item {
  width: 100%;
  margin: 1.5rem auto;
  min-width: 360px;
  max-width: 360px;
  border-radius: 5px;
  background-color: #f3f3f3;
  box-shadow: 1px 1px 7px #747474;

  transition: all 0.15s ease;
  &:hover {
    transform: scale(1.01);
  }

  @media all and (min-width: 768px) {
    max-width: 640px;
    text-align: left;
  }
}
.container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media all and (min-width: 768px) {
    text-align: left;
    flex-direction: row;
  }
}
.meta {
  font-size: 75%;
}

.image {
  width: 100%;
  margin: 0 1rem;
  max-width: 200px;
  min-width: 200px;
  border-radius: 5px;
}
</style>