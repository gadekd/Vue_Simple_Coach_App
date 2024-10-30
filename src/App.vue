<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
    components: {
        TheHeader
    }
}
</script>

<style>
:root {
    --base-darkest: #22223b;
    --base-dark: #4a4e69;
    --base-medium: #9a8c98;
    --base-light: #c9ada7;
    --base-lightest: #f2e9e4;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
}

body {
    margin: 0;
}
</style>