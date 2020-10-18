<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header />
    <LeftBar />
    <Footer />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import LeftBar from '@/components/LeftBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Index',
  components: {
    Header,
    LeftBar,
    Footer
  }
}
</script>
