<template>
    <section class="container">
        <!-- HEADER -->
        <Header/>
        <div class="main" id="Category">
            <List/>
        </div>
        <!-- FOOTER -->
        <Footer/>
        <Topbar/>
    </section>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Topbar from '~/components/Topbar'
import List from '~/components/List'

export default {
    components: {
        Header,
        Footer,
        Topbar,
        List,
    }
}
</script>
