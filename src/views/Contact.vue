<template>
  <div class="container mt-5">
    <section class="dark-grey-text mb-5">
      <h3 class="font-weight-bold text-center mb-4">Contact Us</h3>

      <p class="text-center w-responsive mx-auto pb-5">
        Have an event you want us to be a part of? Or is your photographersimply not good enough?<br>
         Get in touch with us using the form below.
      </p>

      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-lg-5 mb-lg-0 pb-lg-3 mb-4">
          <!-- Form with header -->
          <div class="card">
            <div class="card-body">
              <!-- Header -->
              <div class="form-header blue accent-1">
                <h3 class="mt-2">
                  <i class="fa fa-envelope"></i> Write to us:
                </h3>
              </div>
              <p class="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <!-- Body -->
              <form @submit.prevent="handleSubmit">
                <div class="md-form">
                  <input
                    type="text"
                    id="form-name"
                    class="form-control"
                    v-model="name"
                    required
                  />
                  <label for="form-name">Your name</label>
                </div>
                <div class="md-form">
                  <input
                    type="text"
                    id="form-email"
                    class="form-control"
                    v-model="email"
                    required
                  />
                  <label for="form-email">Your email</label>
                </div>
                <div class="md-form">
                  <input
                    type="text"
                    id="form-Subject"
                    class="form-control"
                    v-model="subject"
                  />
                  <label for="form-Subject">Subject</label>
                </div>
                <div class="md-form">
                  <textarea
                    id="form-text"
                    class="form-control md-textarea"
                    rows="3"
                    v-model="message"
                  ></textarea>
                  <label for="form-text">Send message</label>
                </div>
                <div class="text-center">
                  <button
                    class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                    type="Submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!-- Form with header -->
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-lg-7">
          <!--Google map-->
          <div
            id="map-container-section"
            class="z-depth-1-half map-container-section mb-4"
            style="height: 400px"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13233.246626377493!2d18.496521794634134!3d-33.984527805493826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1647422855569!5m2!1sen!2sza"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            ></iframe>
          </div>
          <!-- Buttons-->
          <div class="row text-center">
            <div class="col-md-4">
              <a class="btn-floating blue accent-1">
                <img
                  src="https://img.icons8.com/pastel-glyph/40/000000/worldwide-location--v2.png"
                  style="padding-bottom: 15px"
                />
              </a>
              <p>Cape Town,</p>
              <p class="mb-md-0">South Africa</p>
            </div>
            <div class="col-md-4">
              <a class="btn-floating blue accent-1">
                <img
                  src="https://img.icons8.com/ios/40/000000/phone.png"
                  style="padding-bottom: 15px"
                />
              </a>
              <p>+ 01 234 567 89</p>
              <p class="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </div>
            <div class="col-md-4">
              <a class="btn-floating blue accent-1">
                <img
                  src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/40/000000/external-email-contact-us-xnimrodx-lineal-xnimrodx-4.png"
                  style="padding-bottom: 15px"
                />
              </a>
              <p>info@gmail.com</p>
            </div>
          </div>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </section>
    <!--Section: Content-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      fetch("https://finproject-backend.herokuapp.com/contact", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          subjact: this.subject,
          message: this.message,
        }),
        headers: {
          'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => {this.contact = data, alert("Message has been sent successfully")})
      .catch((err) =>
        console.log(err.message)
      );
    },
  },
};
</script>

<style scoped>
.map-container-section {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-container-section iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.md-form {
  padding-bottom: 20px;
}
h3 {
  padding-left: 120px;
}
.card p {
  padding-left: 60px;
}
.container {
  padding-top: 100px;
}
</style>
