<script setup>
defineProps({
    text: {
        type: String,
        default: 'Button'
    }
})

const button = `w-full h-full bg-red-500 hover:bg-red-600
                px-3 leading-3 text-white rounded`
</script>

<template>
    <button v-on:click="$emit('change')" :class="button">{{ text }}</button>
</template>

<style>

</style>
