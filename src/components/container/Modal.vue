<template>
    <Transition>
        <div class="modal">
            <div class="modal-container">
                {{ movie }}
                <Button :text="'Cerrar'" @change="$emit('close')" ></Button>
            </div>
        </div>
    </Transition>
</template>
<script setup>
import Button from '../base/Button/Button.vue'
defineProps({
    movie: Object
})

</script>
