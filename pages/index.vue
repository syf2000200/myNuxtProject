<template>
  <section class="container">
    <Header/>
    <div>
      <h1 class="title">
        123
      </h1>
      <h2 class="subtitle">
        FEStudy
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header'
import './style.css'

export default {
  components: {
    Header
  }
}
</script>

<style>
</style>

