<template>
  <div class="login-container">
    <div class="content">
      <div class="empty-space"></div> <!-- Prvi dio: prazan prostor -->
      <div class="button-container"> <!-- Drugi dio: gumbi -->
        <router-link to="/signin" class="btn btn-custom">Prijava</router-link>
        <router-link to="/signup" class="btn btn-custom">Registracija</router-link>
      </div>
      <div class="image-container"> <!-- Treći dio: slika -->
        <img src="@/assets/maska.png" alt="Descriptive Alt Text" class="side-image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login-container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  padding: 0 20px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.empty-space {
  flex: 1; /* Prvi dio: prazan prostor */
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-custom {
  background-color: #ff6996;
  color: white;
  padding: 10px 20px;
  margin: 10px 0;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  display: block;
  width: 200px; /* širina tipke */
  font-weight: bold; /* debljina slova */
}

.image-container {
  margin-left: 100px; /* Pomak slike udesno */
}

.side-image {
  max-width: 70%;
  height: auto;
  border-radius: 10px; /* zaobljeni rubovi slici */
}
</style>