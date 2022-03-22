<template>
  <section id="body">
    <div class="row py-5 px-4">
      <div class="col-md-5 mx-auto">
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img
                  src="https://i.postimg.cc/DzpRmtk6/Ano-Photographer.png"
                  alt=""
                  width="130"
                  class="rounded mb-2 img-thumbnail"
                /><a href="#" class="btn btn-outline-dark btn-sm btn-block"
                  >Edit profile</a
                >
              </div>
              <div class="media-body mb-5 text-white">
                <h4 class="mt-0 mb-0">Anothando Yono</h4>
                <p class="small mb-4">
                  <i class="fas fa-map-marker-alt mr-2"></i>East London, South
                  Africa
                </p>
              </div>
            </div>
          </div>
          <div class="bg-light p-4 d-flex justify-content-end text-center">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">5</h5>
                <small class="text-muted"> Projects</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">334</h5>
                <small class="text-muted"> Followers</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block">88</h5>
                <small class="text-muted"> Following</small>
              </li>
            </ul>
          </div>
          <div class="px-4 py-3">
            <h5 class="mb-0">About</h5>
            <div id="sec" class="p-4 rounded shadow-sm bg-light">
              <p class="font-italic mb-0">Landscape photographer</p>
              <p class="font-italic mb-0">+1 years experience</p>
              <p class="font-italic mb-0">Lives in East London</p>

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
          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Recent projects</h5>
              <a href="#" class="btn btn-link text-muted">Show all</a>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 mb-2 pl-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 pr-lg-1 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 pl-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#body {
  overflow-x: hidden;
  background-image: url("https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.profile-head {
  transform: translateY(5rem);
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
  height: 140px;
}

.cover {
  background-image: url("https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 35vh;
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
