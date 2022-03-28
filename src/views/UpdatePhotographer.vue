<template>
  <section class="h-100 gradient-form" style="background-color: #eee">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <form @submit.prevent="edit">
                    <div class="form-outline mb-4">
                      <input
                        type="name"
                        id="form2Example11"
                        class="form-control"
                        placeholder="Enter email"
                        v-model="photographer.name"
                      />
                      <label class="form-label" for="form2Example11"
                        >Name</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="name"
                        id="form2Example22"
                        class="form-control"
                        placeholder="Enter City"
                        v-model="photographer.city"
                      />
                      <label class="form-label" for="form2Example22"
                        >City</label
                      >
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        type="name"
                        id="form2Example22"
                        class="form-control"
                        placeholder="Enter Project Numbers"
                        v-model="photographer.project_number"
                      />
                      <label class="form-label" for="form2Example22"
                        >Project_number</label
                      >
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        type="name"
                        id="form2Example22"
                        class="form-control"
                        placeholder="Enter Follow Number"
                        v-model="photographer.following_number"
                      />
                      <label class="form-label" for="form2Example22"
                        >Following_number</label
                      >
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        type="name"
                        id="form2Example22"
                        class="form-control"
                        placeholder="Enter Follower Number"
                        v-model="photographer.follower_number"
                      />
                      <label class="form-label" for="form2Example22"
                        >Follower_number</label
                      >
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <router-link to="/updatePhotographers">
                        <button
                          @click="edit(photographer._id)"
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          update
                        </button></router-link
                      >
                    </div>
                  </form>
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
      name: "",
      city: "",
      project_number: "",
      following_number: "",
      follower_number: "",
      photographer: {},
      token: "",
    };
  },
  mounted() {
    this.photographer = this.$route.params;
    this.token = localStorage.getItem("jwt");
  },
  methods: {
    edit(id) {
      fetch("https://finproject-backend.herokuapp.com/photographers/" + id, {
        method: "PUT",
        body: JSON.stringify({
          name: this.photographer.name,
          city: this.photographer.city,
          project_number: this.photographer.project_number,
          following_number: this.photographer.following_number,
          follower_number: this.photographer.follower_number,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + this.token,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.jwt) {
            console.log("JSON", json);
            localStorage.setItem("jwt", json.jwt);
            localStorage.setItem("user", JSON.stringify(json.user));
            localStorage.setItem("isAdmin", JSON.stringify(json.user.isAdmin));
            // console.log(json.user)
            this.$emit("login");
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
form {
  padding-top: 100px;
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
