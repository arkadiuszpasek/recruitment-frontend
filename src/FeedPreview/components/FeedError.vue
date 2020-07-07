<template>
  <div class="container" @click="onClick">
    <div class="reload">&#8635;</div>
    <h4>Argh...something went wrong. Please try again</h4>
  </div>
</template>

<script>
export default {
  name: "FeedError",
  methods: {
    onClick() {
      this.$emit("reload");
    }
  }
};
</script>

<style lang="scss" scoped>
.reload {
  font-size: 300%;
}

.container {
  width: 100%;
  max-width: 640px;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 5px;
  background-color: #f3f3f3;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
}
</style>