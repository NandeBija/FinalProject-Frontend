<template>
  <!-- <div class="topnav" id="myTopnav">
    <a href="#home" class="active"
      ><router-link to="/">Home</router-link>
      <i class="fa fa-home" aria-hidden="true"></i
    ></a>
    <a href="#"
      ><router-link to="/about">About <i class="fa fa-user"></i></router-link
    ></a>
    <a href="#resume">Services <i class="fa fa-cogs"></i></a>
    <a href="#projects">Photographers <i class="fa fa-camera"></i></a>
    <a href="#testimonil">Testimonials <i class="fa fa-commenting-o"></i></a>
    <a href="#cont2">Contact <i class="fa fa-envelope"></i></a>
    <a href="javascript:void(0);" class="icon" @click="myFunction">
      <i class="fa fa-bars"></i>
    </a>
  </div> -->
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2"
        ><router-link to="/">
          <img
            src="https://i.postimg.cc/sf6RDzVS/snap-away.png"
            height="90"
            width="180"
            alt="Logo"
            loading="lazy"
            style="margin-top: -1px"
        /></router-link>
      </a>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/">Home<i class="fa fa-home"></i></router-link
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/about"
                >About<i class="fa fa-user"></i></router-link
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/services"
                >Services<i class="fa fa-cogs"></i></router-link
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/photographers"
                >Photographers<i class="fa fa-camera"></i></router-link
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/photographers"
                >Contact us<i class="fa fa-envelope"></i></router-link
            ></a>
          </li>
        </ul>
        <!-- Left links -->

        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-link px-3 me-2">Login</button>
          <button type="button" class="btn btn-secondary me-3">
            Sign up now!
          </button>
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {
  methods: {
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
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
}

.nav-item a {
  float: left;
  display: block;
  color: green;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
  font-family: courier new;
  font-weight: bold;
}

.nav-item a:hover {
  color: greenyellow;
}

.topnav a.active {
  background-color: greenyellow;
  color: white;
}

.topnav .icon {
  display: none;
}
.fa {
  position: relative;
  font-size: 22px;
  text-align: center;
  padding-left: 15px;
  color: #0a0a0a;
  padding-top: 5px;
}
.fa {
  color: green;
}
.d-flex button {
  border-radius: 20%;
  
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
