<template>
  <section id="body">
    <div class="row py-5 px-4">
      <div
        v-for="photographer of photographerProfile"
        :key="photographer.name"
        class="col-md-5 mx-auto"
      >
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end profile-head">
              <div class="profile mr-3">
                <img
                  :src="photographer.profilePic"
                  alt="..."
                  width="130"
                  class="rounded mb-2 img-thumbnail"
                /><a href="#" class="btn btn-outline-dark btn-sm btn-block"
                  >Edit profile</a
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
              <p class="font-italic mb-0">{{ photographer.about_1 }}</p>
              <p class="font-italic mb-0">{{ photographer.about_2 }}</p>
              <p class="font-italic mb-0">{{ photographer.about_3 }}</p>

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
            </div>
            <div class="row">
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img
                  :src="photographer.proj_1"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 mb-2 pl-lg-1">
                <img
                  :src="photographer.proj_2"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 pr-lg-1 mb-2">
                <img
                  :src="photographer.proj_3"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 pl-lg-1">
                <img
                  :src="photographer.proj_4"
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
export default {
  data() {
    return {
      photographerProfile: [
        {
          profilePic: "https://i.postimg.cc/4NXGDQWf/photographer1.png",
          name: "Seko Mpofu",
          city: "Cape Town",
          project_number: "4",
          following_number: "12",
          follower_number: "455",
          about_1: "Videographer",
          about_2: "Wildlife photographer",
          about_3: "Lives in Cape Town",
          proj_1:
            "https://cdn.theculturetrip.com/wp-content/uploads/2021/11/2c1074k-e1638197792976.jpg",
          proj_2:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hippopotamus-extreme-animals-social-1642555668.jpg",
          proj_3:
            "https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png",
          proj_4:
            "https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        },
        {
          profilePic: "https://i.postimg.cc/DzpRmtk6/Ano-Photographer.png",
          name: "Ano Yono",
          city: "Cape Town",
          project_number: "10",
          following_number: "122",
          follower_number: "55",
          about_1: "Art photographer",
          about_2: "Video editor",
          about_3: "Lives in Cape Town",
          proj_1:
            "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
          proj_2:
            "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          proj_3:
            "https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc=",
          proj_4:
            "https://media.vanityfair.com/photos/5e8f9f875752fb00088317c4/16:9/w_1280,c_limit/The-Art-of-Making-Art-About-a-Plague.jpg",
        },
        {
          profilePic:
            "https://i.postimg.cc/hGP133Yh/Screenshot-from-2022-03-26-13-47-52.png",
          name: "HisTall pictures",
          city: "Port Elizerbeth",
          project_number: "4",
          following_number: "111",
          follower_number: "34",
          about_1: "Landscape photographer",
          about_2: "",
          about_3: "Lives in Cape Town",
          proj_1:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-07-11-at-5-10-02-pm-1531412351.png",
          proj_2:
            "https://www.researchgate.net/profile/Vuk-Radovic/publication/339195935/figure/fig1/AS:857582277230597@1581474956750/Supertall-residential-skyscrapers-1-7-in-order-of-construction-Q1-Tower-Australia.ppm",
          proj_3:
            "https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/16:9/w_3999,h_2249,c_limit/MtFuji-GettyImages-959111140.jpg",
          proj_4:
            "http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world-og.jpg",
        },
        {
          profilePic:
            "https://i.postimg.cc/nVv9BGdW/Screenshot-from-2022-03-26-13-51-26.png",
          name: "Nande Bija",
          city: "Durban",
          project_number: "4",
          following_number: "33",
          follower_number: "52",
          about_1: "Food photographer",
          about_2: "",
          about_3: "Lives in Cape Town",
          proj_1:
            "https://post.healthline.com/wp-content/uploads/2020/09/french-fries-732x549-thumbnail-732x549.jpg",
          proj_2:
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
          proj_3:
            "https://blogs.uoregon.edu/natewoodburyaad250/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg",
          proj_4:
            "https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-500x375.jpg",
        },
        {
          profilePic:
            "https://i.postimg.cc/KvG7YWZf/Screenshot-from-2022-03-26-13-57-45.png",
          name: "Thuli P",
          city: "Cape Town",
          project_number: "4",
          following_number: "11",
          follower_number: "33",
          about_1: "Exotic cars photographer",
          about_2: "Video editor",
          about_3: "Lives in Johannesburg",
          proj_1:
            "https://static.onecms.io/wp-content/uploads/sites/28/2021/12/23/header-lamborghini-huracan-evo-spider-EXOTICCARS1221.jpg",
          proj_2:
            "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2014_20/435976/140512-140512-maserati-0928.jpg",
          proj_3:
            "https://hauteliving.com/wp-content/uploads/2013/08/veyron10.jpg",
          proj_4: "https://miro.medium.com/max/1200/0*5l6nUSRo9bFxCWb4",
        },
      ],
    };
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
  height: 302px
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
