<template>
  <div
    id="login"
    class="min-h-screen min-w-screen"
    style="background: linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ), url(images/photo-1446776811953-b23d57bd21aa.jpeg) no-repeat center center fixed"
  >
    <div class="container mx-auto p-8">
      <div class="mx-auto max-w-sm">
        <div class="py-10 text-center">
          <!-- <h5>Client Portal</h5> -->
        </div>

        <div class="bg-white rounded shadow">
          <div
            class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase"
          >Our apologies</div>

          <div class="bg-grey-lightest px-10 py-10">
            <div class="mb-3">
              <p class="py-2 text-center">
                <strong>You do not have permisson to access this site.</strong>
              </p>
              <p class="py-5">
                This site is for our Media and clients only. Perhaps you meant to login at
                <a
                  href="Https://covid-19tracking.netlify.app"
                >COVID-19Tracker</a>.
              </p>

              <p class="pt-5">
                <strong>General Media:</strong> If you just created an account, it may take up to 24 hours to be approved. To expedite the process, email
                <a
                  class="text-blue-dark"
                  href="mailto:joey@tech-center.com.com?subject=COVID-19Tracker Support"
                >joey@tech-center.com.com</a>.
              </p>
              <p class="pt-5">
                <strong>COVID-19Tracker Media:</strong> If you just created an account, you need to connect your COVID-19Tracker account with our team
                <a
                  href="https://covid-19tracker.netlify.app"
                >Media account</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "401",
  data() {
    return {};
  }
};
</script>