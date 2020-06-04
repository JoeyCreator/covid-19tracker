<template>
  <div id="app">
    <Navbar/>
    <!-- 
      The <RouterView /> component helps us display the
      current page depending on wethe route/page that
      we are on. 
    -->
    <RouterView/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      prevHeight: 0
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>