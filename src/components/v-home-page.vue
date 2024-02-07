<template>
  <div class="home-page">
    <div class="home-page__links">
    <router-link to="/photos">Generate images</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: rgba(110, 110, 110, 0.445);
  .home-page{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .home-page__links{
      a{
        padding : 15px ;
        border: 1px solid rgb(85, 150, 170);
        border-radius: 30px;
        background: rgb(85, 150, 170);
        font-size: 2rem;
        color: white;
        font-family: sans-serif;

      }
    }
    
  }
}
</style>
