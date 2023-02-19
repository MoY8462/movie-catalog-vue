<script setup>
import Message from '../base/Message/Message.vue';
import Secondary from '../base/Button/Secondary.vue';
import Image from '../../assets/images/poster1.jpeg'

defineProps({
    url: {
        type: String,
        default: Image
    },
    category: {
        type: String,
        default: 'action'
    },
    title: String,
    disabled: Boolean
})
</script>

<template>
    <div :class="category" class="card">
        <img class="card__img" :src="url" alt="poster película">
        <Message :category="category" :title="title"/>
        <Secondary @change="$emit('change')" class="card__secondary" :state="category" :text="'Detalles'"/>
    </div>
</template>

<style>
.card{
    min-width: 200px;
    width: 100%;
    height: 475px;
    padding: 15px;
    margin: 10px;
    border-style: solid;
    border-width: 2px;
    border-radius: 0.3rem;
}
.card:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card__img{
    width: 100%;
    height: 300px;
}
.card__secondary{
    height: 30px;
}
.action{
    border-color: #0ea5e9;
    background-color: #bae6fd;
}
.comedy {
    border-color: #eab308;
    background-color: #fef08a;
}
.horror {
    border-color: #ef4444;
    background-color: #fecaca;
}
</style>