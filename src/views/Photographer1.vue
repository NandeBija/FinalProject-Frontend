<template>
  <section id="body">
    <div class="row py-5 px-4">
      <div>
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img
                  :src="photographer.img"
                  alt="..."
                  width="130"
                  class="rounded mb-2 img-thumbnail"
                />
                <a
                  href="#"
                  class="btn btn-outline-dark btn-sm btn-block"
                  v-if="isAdmin"
                  ><router-link
                    :to="{ name: 'updatePhotographers', params: photographer }"
                    >Edit profile</router-link
                  ></a
                >
                <a
                  href="#"
                  class="btn btn-outline-dark btn-sm btn-block"
                  v-if="isAdmin"
                  ><router-link
                    :to="{ name: 'updatePhotographers', params: photographer }"
                    >Delete profile</router-link
                  ></a
                >
              </div>
              <div class="media-body mb-5 text-white">
                <h4 class="mt-0 mb-0">{{ photographer.name }}</h4>
                <p class="small mb-4">
                  <i class="fas fa-map-marker-alt mr-2"></i
                  >{{ photographer.city }}
                </p>
              </div>
            </div>
          </div>
          <div class="bg-light p-4 d-flex justify-content-end text-center">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{ photographer.project_number }}
                </h5>
                <small class="text-muted"> Projects</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{ photographer.follower_number }}
                </h5>
                <small class="text-muted"> Followers</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">
                  {{ photographer.following_number }}
                </h5>
                <small class="text-muted"> Following</small>
              </li>
            </ul>
          </div>
          <div class="px-4 py-3">
            <h5 class="mb-0">About</h5>
            <div id="sec" class="p-4 rounded shadow-sm bg-light">
              <p class="font-italic mb-0">{{ photographer.about }}</p>
              <button
                type="button"
                class="btn btn-outline-danger btn-rounded waves-effect"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/20/000000/booking.png"
                /><router-link to="/booking">Book Me</router-link>
              </button>
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
      photographer: {},
      isAdmin: false,
    };
  },

  mounted() {
    this.photographer = this.$route.params;

    if (localStorage.getItem("isAdmin") === "true") {
      this.isAdmin = true;
    }
  },
};
</script>

<style scoped>
#body {
  overflow-x: hidden;
  background-image: url("https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
  background-size: cover;
  background-repeat: no-repeat;
}
.profile-head {
  transform: translateY(5rem);
}
a {
  color: white;
}

button {
  float: right;
  color: rgb(44, 43, 43);
  background-color: #e96443;
}
button:hover {
  background-color: red;
}
#sec {
  height: 180px;
}

.cover {
  background-image: url("https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: 302px;
}
.profile,
.btn {
  color: white;
}

body {
  background: #654ea3;
  background: linear-gradient(to right, #e96443, #904e95);
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
