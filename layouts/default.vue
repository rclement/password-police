<template>
  <div class="layout">
    <header>
      <heading />
    </header>

    <main class="main">
      <nuxt />
    </main>

    <footer class="footer">
      <credits />
    </footer>
  </div>
</template>

<script>
import Heading from '~/components/Heading'
import Credits from '~/components/Credits'

export default {
  components: {
    Heading,
    Credits
  }
}
</script>


<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}
</style>
