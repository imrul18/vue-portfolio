<template>
  <div>
    <section class="portfolio" id="portfolio">
      <h1 class="heading">my <span>portfolio</span></h1>

      <div class="counter">
        <div class="card" v-for="port in portfolio" :key="port">
          <div class="card-text">
            <span class="type">{{ port.type }}</span>
            <h2>{{ port.title }}</h2>
            <p>
              {{ port.desc }}
            </p>
          </div>
          <div class="card-stats">
            <div class="stat">
              <a :href="port.githublink" target="_new">
                <i class="fab fa-github icon"></i
              ></a>
            </div>
            <div class="stat" v-if="port.weblink !== ''">
              <a :href="port.weblink" target="_new">
                <i class="fas fa-eye icon"></i
              ></a>
            </div>
            <div class="stat" v-else>
              <a :href="port.weblink" target="_new">
                <i class="fas fa-eye-slash icon"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { myMixin } from "./../../mixins.js";
export default {
  mixins: [myMixin],
};
</script>

<style scoped>
.portfolio .box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.counter {
  flex: 1 1 48rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  display: grid;
  height: 24rem;
  width: 30rem;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto;
  text-align: center;
  margin: 30px;
}

.card-text {
  grid-area: text;
}
.card-stats {
  grid-area: stats;
}

.card-text {
  grid-area: text;
  margin: 22px;
}
.card-text .type {
  color: rgb(255, 7, 110);
  font-size: 13px;
}
.card-text p {
  color: grey;
  font-size: 15px;
  font-weight: 300;
}
.card-text h2 {
  margin-top: 0px;
  font-size: 24px;
}

.card-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(255, 7, 110);
}

.card-stats .stat .icon {
  font-size: 3rem;
}
.card-stats .stat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: white;
  padding: 10px;
}

.card {
  transition: 0.5s ease;
  cursor: pointer;
}
</style>