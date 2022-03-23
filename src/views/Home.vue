<template>
  <section>
    <div class="shape">
      <div class="row">
        <div class="col-12">
          <p>
            <span class="Photographers"
              >Spend less time scheduling,<br />
              more time capturing beautiful moments. </span
            ><br /><span class="span">
              Online booking system for photographers</span
            >
          </p>
        </div>
        <div class="col-12">
          <button class="btn">
            <router-link to="/register">Get a Free Account</router-link>
          </button>
        </div>
      </div>

      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1390 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L48,96C96,128,192,192,288,229.3C384,267,480,277,576,272C672,267,768,245,864,213.3C960,181,1056,139,1152,106.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> -->
    </div>
  </section>
  <!-- <section>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <img src="https://img.icons8.com/ios/50/000000/booking.png" />
          <h2>Full booking experience</h2>
          <p>Offer our customers a personalized booking experience.</p>
        </div>
        <div class="col-sm">
          <img src="https://img.icons8.com/ios/50/000000/tags--v1.png" />
          <h2>Prices up to R250/session</h2>
          <p>
            Book any of our trusted photographers for as little as R250 per
            session
          </p>
        </div>
        <div class="col-sm">
          <img src="https://img.icons8.com/ios/50/000000/services--v1.png" />
          <h2>Services fit for kings</h2>
          <p>Top of the range photos & videos with the best quality</p>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
export default {};
</script>

<style scoped>
* {
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: white;
}
#sec {
  min-height: 60vh;
}
.col-12:nth-child(1) {
  padding-top: 200px;
  color: rgb(255, 255, 255);
  font-size: 3.29rem;
  /* padding-left: 10%; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-sm img {
  padding-bottom: 14px;
}
.row {
  padding-top: 25px;
}
.btn:hover {
  background-color: maroon;
}
.btn {
  width: 180px;
  height: 50px;
  border: none;
  font-size: 16px;
  /* justify-content: center; */
  /* padding: 7px 26px; */
  /* text-align: center; */
  color: rgba(255, 255, 255, 0.979);
  background: #dc3545;
  border-radius: 40px;
  /* margin: auto;
  position: relative;
  left: 425px; */
}
.col-12 button {
  position: relative;
  left: 420px;
}
.col-12 button i {
  padding-right: 7px;
}
.Photographers {
  font-weight: 900;
}
.span {
  font-weight: 300;
  font-size: 40px;
  color: rgba(245, 245, 245, 0.808);
}
svg {
  /* position: fixed; */
  width: 100%;
  bottom: 0;
  left: 0;
}
.shape {
  background-image: url("https://i.pinimg.com/originals/71/eb/40/71eb4020b9b0d687f9ed8dffd2a2478f.jpg");
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: center;
  background-size: cover;
  min-height: 70vh;
}

/* Styles copied  */
.section {
  font-size: 1em;
  line-height: 1.5;
  color: #6b7177;
  font-weight: 400;
  font-family: ShopifySans, Helvetica, Arial, Lucida Grande, sans-serif;
  box-sizing: border-box;
  padding: 4em 0;
  padding-top: 6em;
  padding-bottom: 6em;
}

@media screen and (max-width: 1141px) {
  .col-12 button {
    display: none;
  }
}
</style>
