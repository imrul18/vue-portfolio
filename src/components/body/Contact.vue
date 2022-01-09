<template>
  <div>
    <section class="contact" id="contact">
      <h1 class="heading"><span>contact</span> me</h1>

      <div class="row">
        <div class="content">
          <h3 class="title">contact info</h3>

          <div class="info">
            <h3>
              <a href="https://www.facebook.com/imrul18" target="_new"
                ><i class="fab fa-facebook"></i
              ></a>
              Imrul Afnan
            </h3>
            <h3>
              <a href="https://www.instagram.com/imrulafnan/" target="_new"
                ><i class="fab fa-instagram"></i
              ></a>
              Imrul Afnan
            </h3>
            <h3>
              <a href="https://github.com/imrul18" target="_new"
                ><i class="fab fa-github"></i
              ></a>
              Imrul Afnan
            </h3>
            <h3 class="email">
              <a href="https://mail.google.com" target="_new"
                ><i class="fas fa-envelope"></i
              ></a>
              imrul.afnan18@gmail.com
            </h3>
            <h3><i class="fas fa-phone"></i> +880 167 7756337</h3>
            <h3><i class="fas fa-phone"></i> +880 177 2676855</h3>
            <h4>
              <i class="fas fa-map-marker-alt"></i> Niketon, Gulshan-1,
              Dhaka-1212
            </h4>
          </div>
        </div>

        <form action="">
          <input type="text" placeholder="name" class="box" />
          <input type="email" placeholder="email" class="box" />
          <input type="text" placeholder="subject" class="box" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="box message"
            placeholder="message"
          ></textarea>
          <button type="submit" class="btn">
            send <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact .row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.contact .row .content {
  flex: 1 1 30rem;
  padding: 4rem;
  padding-bottom: 0;
}

.contact .row form {
  flex: 1 1 45rem;
  padding: 2rem;
  margin: 2rem;
  margin-bottom: 4rem;
}

.contact .row form .box {
  padding: 1.5rem;
  margin: 1rem 0;
  background: #3333;
  color: #fff;
  text-transform: none;
  font-size: 1.7rem;
  width: 100%;
}

.contact .row form .box::placeholder {
  text-transform: capitalize;
}

.contact .row form .message {
  height: 15rem;
  resize: none;
}

.contact .row .content .title {
  text-transform: uppercase;
  color: #fff;
  font-size: 3rem;
  padding-bottom: 2rem;
}

.contact .row .content .info h3 {
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #eee;
  padding: 1rem 0;
  font-weight: normal;
}
.contact .row .content .info .email {
  text-transform: lowercase;
}

.contact .row .content .info h4 {
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #eee;
  padding: 1rem 0;
  font-weight: normal;
}

.contact .row .content .info h3 i {
  padding-right: 1rem;
  color: var(--yellow);
}
</style>