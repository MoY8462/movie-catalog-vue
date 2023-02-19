<script setup>
import film from '../../../assets/film.svg'
import categories from './Categories.js'

defineProps({
    title: {
        type: String,
        default: 'Película'
    },
    category: {
        type: String,
        default: 'action'
    }

})
</script>

<template>
    <div class="message">
        <h3 class="message__title">{{ title }}</h3>
        <p class="meessage__content">Contenido de la película</p>
        <div class="message__category">
            <img :src="film" alt="">
            <span :class="category">{{ categories[category] }}</span>
        </div>
        
    </div>
</template>

<style>
.message {
    width: 100%;
}
.message__title {
    text-align: center;
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
    font-weight: 600;
}
.message__content{
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
}
.message__category {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
    display: flex;
    align-items: center;
}
.message__category img {
    width: 20px;
    height: 20px;
}
.message .action{
    color: #0ea5e9;
}
.message .comedy{
    color: #eab308;
}
.message .horror{
    color: #ef4444;
}
</style>