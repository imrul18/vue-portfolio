<template>
  <div>
    <section class="gallery" id="gallery">
      <h1 class="heading">my <span>Gallery</span></h1>

      <div class="box-container">
        <div class="box">
          <img src="../../assets/g1.jpg" alt="" />
        </div>

        <div class="box">
          <img src="../../assets/g2.jpg" alt="" />
        </div>

        <div class="box">
          <img src="../../assets/g3.jpg" alt="" />
        </div>

        <div class="box">
          <img src="../../assets/g4.jpg" alt="" />
        </div>

        <div class="box">
          <img src="../../assets//g5.jpg" alt="" />
        </div>

        <div class="box">
          <img src="../../assets//g6.jpg" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    toggle() {},
  },
};
</script>

<style scoped>
.gallery .box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.gallery .box-container .box {
  height: 20rem;
  width: 26rem;
  border-radius: 1rem;
  margin: 2rem;
  overflow: hidden;
  cursor: pointer;
}

.gallery .box-container .box img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>