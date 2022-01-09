<template>
  <div>
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./navigation/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600&display=swap");

:root {
  --yellow: #f9ca24;
}

* {
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  transition: all 0.2s linear;
}

*::selection {
  background: var(--yellow);
  color: #333;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

html::-webkit-scrollbar {
  width: 1.4rem;
}

html::-webkit-scrollbar-track {
  background: #222;
}

html::-webkit-scrollbar-thumb {
  background: var(--yellow);
}

body {
  background: #111;
  overflow-x: hidden;
  padding-left: 40rem;
}

section {
  min-height: 100vh;
  padding: 1rem;
}

.btn {
  padding: 0.7rem 3rem;
  background: #333;
  color: #fff;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 2rem;
  border-radius: 5rem;
}

.btn i {
  padding: 0 0.5rem;
  font-size: 1.8rem;
}

.btn:hover {
  background: var(--yellow);
}

.heading {
  text-align: center;
  margin: 0 6rem;
  font-size: 4rem;
  padding: 1rem;
  border-bottom: 0.1rem solid #fff4;
  color: #fff;
}

.heading span {
  color: var(--yellow);
}

/* media queries  */

@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }

  .home {
    padding: 1rem 4rem;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 50%;
  }
  body {
    padding-left: 0;
    padding-top: 45%;
  }
}

@media (max-width: 400px) {
  header {
    width: 100vw;
  }

  .heading {
    margin: 0 3rem;
  }

  .about .row .counter .box {
    width: 100%;
  }

  .education .box-container .box {
    width: 100%;
  }

  .portfolio .box-container .box {
    width: 100%;
  }

  .contact .row form {
    margin: 3rem 0;
  }
}
</style>

