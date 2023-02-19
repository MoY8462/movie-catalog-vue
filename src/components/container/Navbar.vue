<script setup>
import router from '../../router/index.router';
import Button from '../base/Button/Button.vue'
import Secondary from '../base/Button/Secondary.vue'

let userState = false
const userInfo = JSON.parse(localStorage.getItem('user-info'))

try{
    if(userInfo.name && userInfo.email){
        userState = true
        console.log('usuario encontrado')
    }
}   
catch{
    console.log("User not found")
}


const loginRouter = () => {
    console.log('login')
    router.push("/login")
}
const registerRouter = () => {
    router.push("/register")
}
const loggout = () => {
    localStorage.clear()
    router.push("/login")
}
</script>

<template>
    <div class="navbar fixed z-10 top-0">
        <div class="navbar__img">
            <img src="../../assets/images/logo.png" alt="VPelículas logo">
        </div>
        <div class="navbar__href">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
        <div v-if=!userState class="navbar__btn">
            <Secondary :text="'Registro'" @change="registerRouter"></Secondary>
            <Button :text="'Iniciar sesión'" @change="loginRouter"></Button>
        </div>
        <div v-else class="navbar__btn mx-8">
            <Secondary v-on:change="loggout" :text="'Salir'" ></Secondary>
        </div>
    </div>
</template>

<style>

</style>