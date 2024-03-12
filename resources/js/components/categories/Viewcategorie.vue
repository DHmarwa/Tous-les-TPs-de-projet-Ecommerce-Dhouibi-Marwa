<template>
<div >
<div v-if="isLoading">
<h2> Loading .... </h2>
</div>
<div v-else class="py-6">
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
<div class="container-fluid">
<router-link :to="{name: 'Addcategorie'}" class="btn btn-outline-light">
New categorie
</router-link>
</div>
</nav>
<table class="table table-striped shadow">
<thead>
<tr>
<th scope="col">id</th>
<th scope="col">nomcategorie</th>
<th scope="col">imagecategorie</th>
<th scope="col">Modifier</th>
<th>Supprimer</th>
</tr>
</thead>
<tbody>
<tr v-for="art in categories" :key="art.id">
    <td><img :src="art.imageart" width="70"
height="80"/> </td>
<td>{{ art.id }}</td>
<td>{{ art.nomcategorie }}</td>
<td>{{ art.imagecategorie }}</td>
<td><button class="btn btn-outline-primary mx-2">
<i class="fa-solid fa-pen-to-square"></i>
Edit</button></td>
<td><button class="btn btn-outline-danger mx-2" @click="deletecategories(art.id)">
<i class="fa-solid fa-trash-can"></i>
Delete
</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import axios from 'axios';
const categories=ref([])
const isLoading=ref(true)
const getgategories=async()=>{
await axios.get("http://localhost:8000/api/categories")
.then(res=>{
categories.value=res.data
isLoading.value=false
})
.catch(error=>{
console.log(error)
})
}
onMounted(() => {
getcategories();
});
const deletecategories=async(id)=>{
    if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
try{
await axios.delete(`http://localhost:8000/api/categories/${id}`)
getcategories()
} catch (error) {
console.log(error)
}
    }
}
</script>
<style lang="scss" scoped>
</style>