<template>
    <div class="bgfff banner-box">
        <div class="g-banner">
          <!-- MENU -->
          <Menu/>
          <!-- SLIDERBANNER -->
          <SlideBanner/>
        </div>
      </div>
</template>

<script>
    import Menu from '~/components/Menu'
    import SlideBanner from '~/components/SlideBanner'
    import './style.css'

    export default {
      components: {
        Menu,
        SlideBanner
      }
    }
</script>

