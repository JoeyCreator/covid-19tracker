<template>
  <main>
    <h1>CountyOverview</h1>
    <iframe
      src="https://covid19canada.maps.arcgis.com/apps/opsdashboard/index.html#/2772c0489f43411ca9493fc5888fbe67"
      height="550"
      width="100%"
    ></iframe>
    <p>Covid-19Tracker</p>
  </main>
</template>

<script>
export default {
  name: "CountyOverview"
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>