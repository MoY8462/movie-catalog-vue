<script setup>
import axios from 'axios'
//import Movies from './data.js'
import Card from '../Card.vue'
import Modal from '../Modal.vue'
import { ref, onMounted } from 'vue'

let userState = ref(false)
let movies = ref(null)
let mov = ref(null)
const userInfo = JSON.parse(localStorage.getItem('user-info'))
let show = ref(false)

onMounted(() => {
   infoMovies()
})

async function infoMovies(){
    movies.value = await axios.get('http://localhost:3000/movies').then(data => movies.value = data.data)
}

try{
    if(userInfo.name && userInfo.email){
        userState.value = true
    }
}
catch{
    userState.value = false
}
const card = (id) =>{
    mov.value = movies.value[id]
    show.value = true
} 
</script>

<template>
    <div class="movies pt-12">
        <div class="movies__card" v-for="(movie, index) in movies">
            <Card   
            :title="movie.title"
            :category="movie.category"
            :url="movie.url"
            :disabled="!userState"
            @change="card(index)"
            ></Card>
        </div>
        <Teleport to="body">
            <Modal v-if="show" @close="show = !show" :movie="mov"></Modal>
        </Teleport>
    </div>
</template>

<style>
.movies {
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    padding-bottom: 100px;
}
.movies__card {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 1200px) {
    .movies {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width: 900px) {
    .movies {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 690px) {
    .movies {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 475px) {
    .movies {
        grid-template-columns: repeat(1, 1fr);
        min-width: 325px;
    }
}

</style>