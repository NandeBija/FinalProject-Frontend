<template>
  <section id="services">
    <h1>This is the services page</h1>
    <div class="container text-center">
      <div class="card">
        <h3 class="mb-5">Your simple, beautiful digital storefront</h3>
        <div class="row">
          <div class="col-md-4">
            <div class="text-center">
              <div class="mt-2">
                <img
                  src="https://img.icons8.com/ios/90/000000/camera--v3.png"
                  width="70"
                  height="70"
                />
              </div>
              <h5 class="mt-3">Photography</h5>
              <small
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit ipsam reprehenderit. Ratione sint aliquid dolorem dicta amet voluptatibus repellat minus fugit ipsa laudantium ut aspernatur, sequi facere, possimus voluptate!</small
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center">
              <div class="mt-2">
                <img
                  src="https://img.icons8.com/ios/50/000000/short.png"
                  width="70"
                  height="70"
                />
              </div>
              <h5 class="mt-3">Videography</h5>
              <small
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio consequuntur libero officiis sapiente nobis reprehenderit, aliquam consequatur, obcaecati ea facere, eum repellat eaque possimus dicta placeat nulla tempore veritatis totam.</small
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center">
              <div class="mt-2">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/laptop.png"
                  width="70"
                  height="70"
                />
              </div>
              <h5 class="mt-3">Photo & Video editing</h5>
              <small
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque deserunt pariatur ab harum repellendus temporibus mollitia sit! Voluptatum sapiente natus nulla! Molestias odio voluptas officiis maiores, repudiandae eligendi nulla?</small
              >
            </div>
          </div>
        </div>
        <div class="button mt-5">
          <button class="btn btn-primary pro-button">
            <router-link to="/photographers">
              More from our photographers</router-link
            >
            
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap");

#services {
  padding-top: 150px;
}

body {
  display: grid;
  place-items: center;
  background: #eee;
  font-family: "Manrope", sans-serif;
}
button {
  color: white;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 50px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 6px;
  -moz-box-shadow: 0px 0px 5px 0px rgba(212, 182, 212, 1);
}

.pro-button {
  padding: 12px 42px;
  background-color: #dc3545;
  border-color: #dc3545;
  color: white;
}

.pro-button:focus {
  outline: none !important;
  background-color: #ffa000;
  border-color: #ffa000;
  box-shadow: 0 0 0 0.2rem rgb(255, 255, 255) !important;
}

.pro-button:active {
  outline: none !important;
  background-color: #ffa000 !important;
  border-color: #ffa000 !important;
}

.pro-button:hover {
  padding: 12px 42px;
  background-color: rgba(128, 0, 0, 0.801);
  border-color: rgba(128, 0, 0, 0.801)
  ;
}
</style>
