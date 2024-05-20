<template>
    <div class="login-container">
      <div class="button-container">
        <router-link to="/signin" class="btn btn-custom">Prijava</router-link>
        <router-link to="/signup" class="btn btn-custom">Registracija</router-link>
      </div>
    </div>
  </template>
  
  <style lang="scss">
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black;
  }
  
  .text-white {
    color: white;
  }
  
  .button-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .btn-custom {
    background-color: #ff69b4; /* Rozo-narančasta boja */
    color: white;
    padding: 10px 20px;
    margin: 10px 0; /* Dodajte vertikalni razmak između gumba */
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    display: block; /* Gumbi će sada biti jedan ispod drugog */
  }
  </style>