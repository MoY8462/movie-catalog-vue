<template>
    <Transition>
        <div class="modal">
            <div class="modal-container">
                <section class="modal-container__info">
                    <span class="container__info__title">{{ movie.title }}</span>
                    <img class="container__info__img" :src="movie.url" alt="image">
                    <span class="container__info__content">{{ movie.content }}</span>
                </section>
                <Button class="modal-container__button" :text="'Cerrar'" @change="$emit('close')" ></Button>
            </div>
        </div>
    </Transition>
</template>
<script setup>
import categories from '../base/Message/Categories.js'
import Button from '../base/Button/Button.vue'
defineProps({
    movie: Object
})

</script>
