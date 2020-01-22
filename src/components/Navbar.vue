<template>
    <div class="navbar">
      <nav class="nav-extended light-blue darken-4">
         <div class="nav-content">
           <router-link :to="{ name: 'Index' }">
               <span class="nav-title">Smothies</span>
           </router-link>
           <a href="" class="btn-floating btn-large halfway-fab pink">
             <router-link :to="{ name: 'AddSmoothie' }">
               <i class="material-icons">add</i>
             </router-link>
           </a>
         </div>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
          return {

          }
        }
    }
</script>

<style scoped>
.navbar nav {
    padding: 0 20px;
}
</style>
