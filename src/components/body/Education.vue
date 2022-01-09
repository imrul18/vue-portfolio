<template>
  <div>
    <section class="education" id="education">
      <h1 class="heading">my <span>education</span></h1>

      <div class="box-container">
        <div v-for="edu in education" :key="edu.time">
          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>{{ edu.time }}</span>
            <h3>{{ edu.degree }}</h3>
            <p>
              Result: {{ edu.result }} <br />
              {{ edu.program }}<br />
              Institute:
              <a :href="edu.institutelink" target="_new"
                ><span>{{ edu.institute }}</span> </a
              ><br />{{ edu.desc }}
            </p>
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
.education .box-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 0;
  padding-left: 3rem;
}

.education .box-container .box {
  width: 50rem;
  margin: 4rem 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  border-left: 0.2rem solid #fff;
  position: relative;
}

.education .box-container .box span {
  text-decoration: none;
  color: #f9ca24;
}

.education .box-container .box h3 {
  font-size: 2rem;
  color: #fff;
  padding-top: 1.5rem;
}

.education .box-container .box p {
  font-size: 1.4rem;
  color: #eee;
  padding: 1rem 0;
}

.education .box-container .box i {
  position: absolute;
  top: -1.5rem;
  left: -2.5rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  line-height: 5rem;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  background: var(--yellow);
}
</style>