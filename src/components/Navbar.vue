<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand me-2"
        ><router-link to="/">
          <img
            src="../assets/SNAP.png"
            height="80"
            width="110"
            alt="Logo"
            loading="lazy"
            style="margin-top: -1px"
        /></router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link to="/about">About</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/services">Services</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/photographers">Photographers</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/contact">Contact</router-link></a
            >
          </li>
        </ul>
        <div class="d-flex align-items-left">
          <!-- <button v-if="isLoggedIn" type="button" class="btn">
            <router-link to="/login">Create user</router-link>
          </button> -->
          <button type="button" class="btn">
            <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
          </button>

          <button v-if="!isLoggedIn" type="button" class="btn" id="btn">
            <router-link to="/register">Sign up</router-link>
          </button>
          <button v-if="isLoggedIn" @click="logout()" type="button" class="btn">
            <router-link to="/">Logout</router-link>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      isLoggedIn: false,
    };
  },

  methods: {
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
    logout() {
      localStorage.clear();
      alert("User logged out");
    },
  },
  mounted() {
    if (localStorage.getItem("jwt")) {
      console.log(localStorage.getItem("jwt"));
      this.isLoggedIn = true;
    }
  },
};
</script>

<style scoped>
.navbar {
  overflow: hidden;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 600;

  margin-left: auto;
  margin-right: auto;
  padding-left: 115px;
  padding-right: 115px;
}
.navbar-nav {
  align-content: center;
  justify-content: center;
  align-items: center;
}

.nav-item a {
  font-weight: 0;
  display: block;
  color: rgb(37, 39, 37);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
  /* font-family: courier new;
  font-weight: bold; */
}

.nav-item a:hover {
  color: rgb(21, 101, 192);
}

.topnav a.active {
  background-color: greenyellow;
  color: white;
}
#btn:hover {
  background-color: maroon;
}

.fa {
  position: relative;
  font-size: 22px;
  text-align: center;
  padding-left: 15px;
  color: #0a0a0a;
  padding-top: 5px;
}

/* .d-flex button {
  border-radius: 20%;
} */
.d-flex button:nth-child(1) {
  display: inline-block;
  border: none;
  font-size: 16px;
  font-weight: 660;
  padding: 7px 26px;
  text-align: center;
  color: rgb(27, 27, 27);

  width: 120px;
  min-height: 45px;
}
.d-flex button:nth-child(2) {
  display: inline-block;
  border: none;
  font-size: 16px;
  padding: 7px 26px;
  text-align: center;
  color: white;
  background: #dc3545;
  border-radius: 40px;
  width: 120px;
  min-height: 45px;
}

/* MEDIA QUERIES */

@media screen and (max-width: 600px) {
  .topnav.responsive .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .navbar {
    overflow: hidden;
    background-color: white;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 600;

    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 37px;
  }
  .topnav {
    overflow: hidden;
    background-color: #000000;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 600;
  }
}
</style>
