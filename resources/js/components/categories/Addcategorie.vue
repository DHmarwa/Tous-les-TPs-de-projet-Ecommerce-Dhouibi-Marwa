<template>
<div class="col-md-6 offset-md-3 border rounded p-4 mt-2 
shadow">
<h4 align="center">Ajout categorie</h4>
<form @submit.prevent="addcategories">
<div class="row">
<div class="col-md-6">.
<label for="id" class="form-label">id</label>
<input type="text" class="form-control" id="id" v-model="categories.id">
</div>
<div class="col-md-6 ms-auto">
<label for="nomcategorie" class="form-label">nomcategorie</label>
<input type="texte" class="form-control" id="nomcategorie" v-model="categories.nomcategorie">
</div>
</div>
<div class="row">
<div class="col-md-6">.
<label for="imagecategorie" class="form-label">imagecategorie</label>
<input type="text" class="form-control" id="imagecategorie" v-model="categories.imagecategorie">
</div>
</div>
<br/>
<button type="submit" className="btn btn-outline-primary">
<i class="fa-solid fa-floppy-disk"></i>Enregister
</button>
<router-link to="/listart" class="btn btn-outline-danger 
mx-2">
<i class="fa-solid fa-xmark"></i>Cancel
</router-link>
</form>
</div>
</template>
<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router';
const router = useRouter() 
import axios from 'axios';
const categories=ref({
id:"",
nomcategorie:"",
imagecategorie:"",
})
const addcategories=async()=>{
await
axios.post("http://localhost:8000/api/categories/",categories.value)
.then(() => (
router.push({ name: 'Viewcategories' })
))
.catch(err => console.log(err))
}
</script>
<style scoped>
</style>
