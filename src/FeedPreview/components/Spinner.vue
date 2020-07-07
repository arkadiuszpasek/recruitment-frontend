<template>
  <div class="spinner" />
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style lang="scss">
.spinner,
.spinner::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.spinner {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border: 0.5em solid rgba(255, 255, 255, 0.2);
  border-left: 0.5em solid #3f3f3f;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: rot 1.1s infinite linear;
  animation: rot 1.1s infinite linear;
}

@-webkit-keyframes rot {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rot {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>