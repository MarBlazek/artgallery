<template>
  <div>
    <nav>
      <router-link to="/">ArtGallery</router-link>
      <router-link to="/galerija">Galerija</router-link>
      <router-link to="/prijava-izbor">Prijava/Registracija</router-link> <!-- Ispravljen link -->
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 20px;
}

.nav-link {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 20px; /* Povećava veličinu slova */
  
  &.active {
    color: blue !important; /* Plava slova kad je aktivan */
  }
}

.left-link {
  color: red; /* Crvena slova za ArtGallery */
  font-family: 'Dancing Script', cursive; /* Primjena fonta */
  font-size: 30px;
}

.center-link, .right-link {
  color: white; /* Bijela slova za Galerija i Prijava */
}
</style>