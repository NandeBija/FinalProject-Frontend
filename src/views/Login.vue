<template>
  <section class="h-100 gradient-form" style="background-color: #eee">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <img
                      src="../assets/SNAP.png"
                      style="width: 185px"
                      alt="logo"
                    />
                    <h4 class="mt-1 mb-5 pb-1">We are The SnapAway Team</h4>
                  </div>

                  <form @submit.prevent="login">
                    <p>Please login to your account</p>

                    <!-- <div class="form-outline mb-4">
                      <input
                        type="name"
                        id="form2Example11"
                        class="form-control"
                        placeholder="Phone number name"
                      />
                      <label class="form-label" for="form2Example11"
                        >Username</label
                      >
                    </div> -->
                    <div class="form-outline mb-4">
                      <input
                        type="name"
                        id="form2Example11"
                        class="form-control"
                        placeholder="Enter email"
                        v-model="email"
                      />
                      <label class="form-label" for="form2Example11"
                        >Email</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example22"
                        class="form-control"
                        placeholder="Enter password"
                        v-model="password"
                      />
                      <label class="form-label" for="form2Example22"
                        >Password</label
                      >
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <button
                        class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="submit"
                      >
                        Log in
                      </button>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-center pb-4"
                    >
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <button type="button" class="btn">
                        <router-link to="/register"> Create new </router-link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">FROM PICTURES TO MOMENTS!</h4>
                  <p class="medium mb-0">
                    We help bridge the gap between you and your most cherished
                    memories by connecting you to professional photographers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      fetch("https://finproject-backend.herokuapp.com/users/login", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.jwt) {
            localStorage.setItem("jwt", json.jwt);
          }
          if (localStorage.getItem("jwt")) {
            this.$router.push({ name: "Home" });
          } else {
            alert("Incorrect credentials");
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.gradient-custom-2:nth-child(1) {
  margin: 10px;
  border-radius: 50px;
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
  width: 100px;
}
.gradient-custom-2:nth-child(2) {
  background-image: url("https://images.unsplash.com/photo-1552498756-8f642a26e50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&w=1000&q=80");
  background-size: cover;
  background-repeat: no-repeat;
}
.btn:nth-child(4) {
  color: grey;
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
</style>
