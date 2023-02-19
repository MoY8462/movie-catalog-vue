<script setup>
defineProps({
    text: {
        type: String,
        default: 'Con nosotros encontraras los mejores contenidos de entretenimiento para ti y a tu familia'
    }
})
</script>

<template>
    <div class="w-full h-64 grid justify-items-center pt-6">
        <img class="w-1/2 mt-10" src="../../assets/images/logo.png" alt="imagen">
        <p class="text-base font-semibold">{{text}}</p>
    </div>
</template>
