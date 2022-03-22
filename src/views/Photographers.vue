<template>
  <section>
    <div class="container" id="photographers">
      <h1>Meet our <span>Photographers!</span></h1>
      <div class="row">
        <div
          v-for="photographer of photographers"
          :key="photographer.title"
          class="col-lg-4"
        >
          <div class="card p-0">
            <div class="card-image">
              <router-link to="/photographer1">
                <img :src="photographer.img" alt="photographer"
              /></router-link>
            </div>
            <div class="card-content d-flex flex-column align-items-center">
              <h4 class="pt-2">{{ photographer.title }}</h4>
              <h5>{{ photographer.role }}</h5>
              <ul class="social-icons d-flex justify-content-center">
                <li style="--i: 1">
                  <a :href="photographer.facebook_link">
                    <img :src="photographer.facebook_img" />
                  </a>
                </li>
                <li style="--i: 2">
                  <a :href="photographer.twitter_link">
                    <img :src="photographer.twitter_img" />
                  </a>
                </li>
                <li style="">
                  <a :href="photographer.insta_link">
                    <img :src="photographer.insta_img" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-4">
          <div class="card p-0">
            <div class="card-image">
              <router-link to="/photographer2">
                <img
                  src="https://i.postimg.cc/DzpRmtk6/Ano-Photographer.png"
                  alt=""
              /></router-link>
            </div> -->
        <!-- <div class="card-content d-flex flex-column align-items-center">
              <h4 class="pt-2">Ano Yono</h4>
              <h5>Photographer</h5>
              <ul class="social-icons d-flex justify-content-center">
                <li style="--i: 1">
                  <a href="https://www.facebook.com/">
                    <img
                      src="https://img.icons8.com/ios/30/000000/facebook-new.png"
                  /></a>
                </li>
                <li style="--i: 2">
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios/30/000000/twitter--v1.png"
                    />
                  </a>
                </li>
                <li style="--i: 3">
                  <a href="https://www.instagram.com/annothaandoy/">
                    <img
                      src="https://img.icons8.com/ios/30/000000/instagram-new--v1.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
        <!-- <div class="col-lg-4">
          <div class="card p-0">
            <div class="card-image">
              <img
                src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div class="card-content d-flex flex-column align-items-center">
              <h4 class="pt-2">SomeOne Famous</h4>
              <h5>Creative Desinger</h5>
              <ul class="social-icons d-flex justify-content-center">
                <li style="--i: 1">
                  <a href="https://www.facebook.com/"
                    ><img
                      src="https://img.icons8.com/ios/30/000000/facebook-new.png"
                  /></a>
                </li>
                <li style="--i: 2">
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios/30/000000/twitter--v1.png"
                    />
                  </a>
                </li>
                <li style="--i: 3">
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios/30/000000/instagram-new--v1.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      photographers: [
        {
          img: "https://i.postimg.cc/4NXGDQWf/photographer1.png",
          title: "Seko Mpofu",
          role: "Photographer|Model",
          insta_img:
            "https://img.icons8.com/ios/30/000000/instagram-new--v1.png",
          facebook_img: "https://img.icons8.com/ios/30/000000/facebook-new.png",
          twitter_img: "https://img.icons8.com/ios/30/000000/twitter--v1.png",
          insta_link: "https://www.instagram.com/melachild_blvck/",
          facebook_link: "https://www.facebook.com/",
          twitter_link: "",
          router_link: "/photographer1",
        },
        {
          img: "https://i.postimg.cc/DzpRmtk6/Ano-Photographer.png",
          title: "Anno Yono",
          role: "Photographer|Model",
          insta_img:
            "https://img.icons8.com/ios/30/000000/instagram-new--v1.png",
          facebook_img: "https://img.icons8.com/ios/30/000000/facebook-new.png",
          twitter_img: "https://img.icons8.com/ios/30/000000/twitter--v1.png",
          insta_link: "https://www.instagram.com/melachild_blvck/",
          facebook_link: "https://www.facebook.com/",
          twitter_link: "",
        },
        {
          img: "https://i.postimg.cc/4NXGDQWf/photographer1.png",
          title: "Seko Mpofu",
          role: "Photographer",
          insta_img:
            "https://img.icons8.com/ios/30/000000/instagram-new--v1.png",
          facebook_img: "https://img.icons8.com/ios/30/000000/facebook-new.png",
          twitter_img: "https://img.icons8.com/ios/30/000000/twitter--v1.png",
          insta_link: "https://www.instagram.com/melachild_blvck/",
          facebook_link: "https://www.facebook.com/",
          twitter_link: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

section {
  min-height: 80vh;
  background-color: #eee;
  background-size: cover;
}

#photographers {
  padding-top: 80px;
  margin-left: 10%;
}
body {
  min-height: 100vh;
  background: linear-gradient(to bottom, #000428, #004683);
}

.container {
  margin-top: 100px;
}

.container .row .col-lg-4 {
  display: flex;
  justify-content: center;
}
h1 {
  text-align: center;
  padding-top: 2px;
  padding-bottom: 50px;
}
span {
  color: #dc3545;
}
.card {
  position: relative;
  padding: 0;
  margin: 0 !important;
  border-radius: 20px;
  overflow: hidden;
  max-width: 280px;
  max-height: 340px;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card .card-image {
  width: 100%;
  max-height: 340px;
}

.card .card-image img {
  width: 100%;
  max-height: 340px;
  object-fit: cover;
}

.card .card-content {
  position: absolute;
  bottom: -180px;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  min-height: 140px;
  width: 100%;
  transition: bottom 0.4s ease-in;
  box-shadow: 0 -10px 10px rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.card:hover .card-content {
  bottom: 0px;
}

.card:hover .card-content h4,
.card:hover .card-content h5 {
  transform: translateY(10px);
  opacity: 1;
}

.card .card-content h4,
.card .card-content h5 {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  transition: 0.8s;
  font-weight: 500;
  opacity: 0;
  transform: translateY(-40px);
  transition-delay: 0.2s;
}

.card .card-content h5 {
  transition: 0.5s;
  font-weight: 200;
  font-size: 0.8rem;
  letter-spacing: 2px;
}

.card .card-content .social-icons {
  list-style: none;
  padding: 0;
}

.card .card-content .social-icons li {
  margin: 10px;
  transition: 0.5s;
  transition-delay: calc(0.15s * var(--i));
  transform: translateY(50px);
}

.card:hover .card-content .social-icons li {
  transform: translateY(20px);
}

.card .card-content .social-icons li a {
  color: #fff;
}

.card .card-content .social-icons li a span {
  font-size: 1.3rem;
}

@media (max-width: 991.5px) {
  .container {
    margin-top: 20px;
  }
  #photographers {
    padding-top: 100px;
    margin-left: 0;
  }

  .container .row .col-lg-4 {
    margin: 20px 0px;
  }
}
</style>
