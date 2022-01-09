<template>
  <div>
    <section class="about" id="about">
      <h1 class="heading"><span>about</span> me</h1>

      <div class="row">
        <div class="info">
          <h3><span> name : </span> {{ name }}</h3>
          <h3><span> age : </span> {{ age }}</h3>
          <h3><span> qualification : </span> {{ qualification }}</h3>
          <h3><span> post : </span> {{ post }}</h3>
          <h3>
            <span> company : </span>
            <a
              style="text-decoration: none; color: #f9ca24"
              :href="companylink"
              target="_new"
            >
              {{ company }}
            </a>
          </h3>
          <h3><span> language : </span> {{ lenguage }}</h3>
          <a
            href="https://doc-04-a0-docs.googleusercontent.com/docs/securesc/o5qla46v9df5qs4nutmuhljjasc4k92s/1su2ghq3ahbe04c2jaq3ts1bjv77nkp7/1641663975000/11532951229955135666/11532951229955135666/1fjzvk9QX4eGahyiJ-6AerSIOUBnvawNj?e=download&authuser=0&nonce=vq0u8coj44f28&user=11532951229955135666&hash=uddec4eqq8kqmko08rrk0n8kd4tlqr62"
            target="_new"
            ><button class="btn">
              download CV <i class="fas fa-download"></i></button
          ></a>
        </div>

        <div class="counter">
          <div class="box">
            <span>{{ experience }}+</span>
            <h3>years of experience</h3>
          </div>

          <div class="box">
            <span>{{ project }}+</span>
            <h3>porject completed</h3>
          </div>

          <div class="box">
            <span>{{ client }}+</span>
            <h3>happy clients</h3>
          </div>

          <div class="box">
            <span>{{ award }}+</span>
            <h3>awards won</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Afnan",
      age: "23",
      qualification: "BSc",
      post: "N/A",
      company: "N/A",
      companylink: "",
      lenguage: "Bangla",
      experience: 1,
      project: 5,
      client: 3,
      award: 3,
    };
  },
};
</script>

<style scoped>
.about .row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
}

.about .row .info {
  flex: 1 1 48rem;
  padding: 2rem 1rem;
  padding-left: 6rem;
}

.about .row .info h3 {
  font-size: 2rem;
  color: var(--yellow);
  padding: 1rem 0;
  font-weight: normal;
}

.about .row .info h3 span {
  color: #eee;
  padding: 0 0.5rem;
}

.about .row .counter {
  flex: 1 1 48rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.about .row .counter .box {
  width: 20rem;
  background: #222;
  text-align: center;
  padding: 2rem;
  margin: 2rem;
}

.about .row .counter .box span {
  font-size: 4rem;
  color: var(--yellow);
}

.about .row .counter .box h3 {
  font-size: 2rem;
  color: #fff;
}
</style>