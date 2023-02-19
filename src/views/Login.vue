<script setup>
import axios from 'axios'
import { ref } from 'vue'
import router from '../router/index.router'
import Navbar from '../components/container/Navbar.vue';

const props =  defineProps({
    error: {
        type: Boolean,
        default: false
    }
})

let error = ref(props.error)

console.log(error.value)

async function loginHandler (credentials) {
    try{
        let result = await axios.get('http://localhost:3000/users?email='+ credentials.email+'&password='+credentials.password)
        if(result.status == 200 && result.data.length > 0){
            localStorage.setItem("user-info", JSON.stringify(result.data[0]))
            console.log("Éxito")
            router.push('/')
        }
        else{
            console.log("error")
            error.value = true
            window.alert("Error al iniciar sesión");
        }
    }
    catch{
        console.log('error')
    }
}
</script>

<template>
    <Navbar/>
    <div class="form">
        <div class="form__content">
            <FormKit
            type="form"
            submit-label="Iniciar sesión"
            @submit="loginHandler"
            :incomplete-message="false"
            >
                <FormKit
                    type="email"
                    name="email"
                    label="Correo electrónico"
                    placeholder="ejemplo@dominio.com"
                    :input-class="{
                        'border-red-500 shadow shadow-red-500': error
                    }"
                    validation="required|email"
                    :validation-messages="{
                        required: 'El correo electrónico es requerido',
                        email: 'El correo electrónico no es válido'
                    }"
                />
                <FormKit
                    type="password"
                    name="password"
                    label="Contraseña"
                    placeholder="**********"
                    :input-class="{
                        'border-red-500 shadow shadow-red-500': error
                    }"
                    validation="required"
                    :validation-messages="{
                        required: 'La contraseña es requerida'
                    }"
                />
            </FormKit>
        </div>
    </div>
</template>