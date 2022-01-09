<template>
  <div>
    <header>
      <div class="user">
        <img src="../../assets/profile.jpg" alt="" />
        <h3 class="name">imrul afnan</h3>
        <p class="post">software developer</p>
      </div>

      <nav class="navbar">
        <ul>
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/about">about</router-link></li>
          <li><router-link to="/education">education</router-link></li>
          <li><router-link to="/skill">skill</router-link></li>
          <li><router-link to="/portfolio">portfolio</router-link></li>
          <li><router-link to="/gallery">gallery</router-link></li>
          <li><router-link to="/contact">contact</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- header section ends -->
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
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  width: 40rem;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  text-align: center;
}

header .user img {
  height: 17rem;
  width: 17rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 0.7rem solid var(--yellow);
}

header .user .name {
  font-size: 3.5rem;
  color: #fff;
}

header .user .post {
  font-size: 2rem;
  color: #eee;
}

header .navbar {
  width: 100%;
}

header .navbar ul {
  list-style: none;
  padding: 1rem 3rem;
}

header .navbar ul li a {
  display: block;
  padding: 1rem;
  margin: 1.5rem 0;
  background: #333;
  color: #fff;
  font-size: 2rem;
  border-radius: 5rem;
}

header .navbar ul li a:hover {
  background: var(--yellow);
}

@media (max-width: 991px) {
  header {
    position: fixed;
    top: 0;
    height: 25%;
    flex-flow: row;
  }

  header .navbar ul {
    padding: 0;
  }
  header .navbar ul li {
    display: inline-block;
    width: 25%;
    margin: 0.2rem;
    background: #333;
    color: #fff;
    border-radius: 5rem;
  }

  header .navbar ul li a {
    font-size: 1.5rem;
    padding: 0;
  }
  header .user img {
    display: none;
  }

  header .user .name {
    display: none;
  }

  header .user .post {
    display: none;
  }

  header .navbar {
    top: 0;
  }
}
</style>
