<template>
  <span class="loader"></span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
  width: 19px;
  height: 19px;
  border: 2px solid #f8f4f4;
  border-bottom-color: #f35c35;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
