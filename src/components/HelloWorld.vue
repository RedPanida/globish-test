<template>
  <div class="home">
    <div>
      <img class="bg" src="../assets/cover.png" alt="">
      <button @click="goToAboutPage" class="start">เริ่มเลย</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  methods: {
    goToAboutPage() {
      this.$router.push("/PersonalQ1");
    },
  },
};
</script>

<style lang="scss" scoped>

img{
  position: fixed;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
body{
  height: 100%;
}
.start{
  width: 250px;
  height: 40px;
  border-radius: 20px;
  background-color: #F7C116;
  position: fixed;
  bottom: 84px;
  left: 20%;
  font-size: 20px;
}
</style>