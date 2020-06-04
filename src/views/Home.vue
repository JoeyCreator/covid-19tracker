<template>
  <div id="app">
    <vue-resizable>
      <div class="center-div">
        <div class="lg:max-w-5xl mx-auto md:px-4 p-4">
          <h1 class="text-4xl font-bold">Canada COVID-19 Tracker</h1>
          <h4 class="text-xs">
            Source:
            <a
              class="border-b border-dotted text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800"
              target="_blank"
              href="https://www.canada.ca/fr/sante-canada.html"
            >Canada Deptartment of Health</a> &middot; Last updated 6/03/2020 1:30 p.m.
          </h4>
        </div>
        <div class="alert alert-dismissible alert-warning">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <h4 class="alert-heading">Technical difficulties</h4>
          <p class="mb-0">
            <i
              class="fas fa-exclamation-circle"
            >We are currently experiencing technical difficulties with our application. Our team is actively working to fix the issue. We hope to have this resolved soon. Thank you for your patience.</i>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfK-yegZRNZyiY76XsXTeeAfd8SH0o8erIaGIehDxf0tw-_sg/viewform"
              class="alert-link"
            >Click to repport any issue.</a>.
          </p>
        </div>
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>
            <i class="fas fa-exclamation-triangle pr-1"></i> Attention
          </strong>
          <a
            href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html?&utm_campaign=gc-hc-sc-coronavirus2021-ao-2021-0005-10020125402&utm_medium=search&utm_source=google-ads-107800103024&utm_content=text-en-434525470059&utm_term=coronavirus%20health%20canada"
            class="alert-link"
          >COVID-19 Pandemic</a> (514-612-7473) For the most up to date information regarding COVID-19 in Canada, please consult Canada Departement of health This site should not be used for life saving information - instead, rather, a source for numbers and statistics.
        </div>
        <iframe
          src="https://experience.arcgis.com/experience/4ab8757241cc4d3fab81c8f86a501ce9"
          height="550"
          width="100%"
        ></iframe>
        <iframe
          src="https://covid19canada.maps.arcgis.com/apps/opsdashboard/index.html#/2772c0489f43411ca9493fc5888fbe67"
          height="550"
          width="100%"
        ></iframe>
        <div class="pb-4">
          <h4 class="text-xs">
            Developed by Joey Cadieux &middot;
            <a
              class="text-blue-600"
              href="mailto:joey@tech-center.com"
            >Contact Me</a> &middot;
            <a
              class="text-blue-600"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfK-yegZRNZyiY76XsXTeeAfd8SH0o8erIaGIehDxf0tw-_sg/viewform"
            >Found an issue?</a>
          </h4>
        </div>
      </div>
    </vue-resizable>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>