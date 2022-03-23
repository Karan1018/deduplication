<template>
<div id="app">
    <AppHeader />
    <vue-formulate />
</div>
</template>

<script>
import AppHeader from './components/AppHeader'

import VueFormulate from './components/VueFormulate';

export default {
    name: 'App',
    components: {
        AppHeader,
        VueFormulate
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0px;
}
</style>
