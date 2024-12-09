<template>
    <the-header></the-header>
    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
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

.route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.route-enter-active {
    transition: all 0.3s ease-out;
}

.route-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.route-leave-active {
    transition: all 0.3s ease-in;
}
</style>