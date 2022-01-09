<template>
  <div>
    <section class="home" id="home">
      <h3>HI THERE !</h3>
      <h1>I'M <span>Imrul Afnan</span></h1>
      <p>
        Interested in the role of a Computer Engineer where I can contribute my
        analytical skills and knowledge acquired by pursuing my degree in
        Computer Engineering. Looking for a dynamic and progressive company
        where my skills are utilized in the maximum way possible.
      </p>
      <a href="/about"
        ><button class="btn">about me <i class="fas fa-user"></i></button
      ></a>
    </section>
  </div>
</template>


<style scoped>
.home {
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 0 15rem;
}

.home h3 {
  font-size: 2.5rem;
  color: #fff;
}

.home h1 {
  font-size: 5rem;
  color: #fff;
}

.home h1 span {
  color: var(--yellow);
}

.home p {
  font-size: 2rem;
  color: #eee;
  padding: 1rem 0;
}

@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }

  .home {
    padding: 1rem 4rem;
  }
}
</style>