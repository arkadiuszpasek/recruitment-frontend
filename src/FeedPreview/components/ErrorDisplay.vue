<template>
  <div class="container" @click="onClick">
    <div class="reload">&#8635;</div>
    <h4>Argh... something went wrong. Please try again</h4>
  </div>
</template>

<script>
export default {
  name: "ErrorDisplay",
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
  padding: 1rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 960px;
  background-color: #f3f3f3;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }

  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
}
</style>