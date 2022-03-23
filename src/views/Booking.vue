<template>
  <section style="background-color: #eee">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Book a photographer with Snap<span>Away</span>
              </p>
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <div id="booking" class="section">
                  <div class="section-center">
                    <div class="container">
                      <div class="row">
                        <div class="booking-form">
                          <div class="form-header">
                            <h1>Make your booking</h1>
                          </div>
                          <form>
                            <div class="form-group">
                              <input
                                class="form-control"
                                type="text"
                                placeholder="Country, ZIP, city..."
                                v-model="location"
                              />
                              <span class="form-label">Location</span>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <input
                                    class="form-control"
                                    type="date"
                                    required
                                    v-model="date"
                                  />
                                  <span class="form-label">Date</span>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <input
                                    class="form-control"
                                    type="email"
                                    placeholder="Enter your Email"
                                    v-model="email"
                                  />
                                  <span class="form-label">Email</span>
                                </div>
                              </div>

                              <div class="col-md-6">
                                <div class="form-group">
                                  <input
                                    class="form-control"
                                    type="tel"
                                    placeholder="Enter you Phone"
                                    v-bind="phone"
                                  />
                                  <span class="form-label">Phone</span>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <input
                                    class="form-control"
                                    type="name"
                                    placeholder="Enter photographer name"
                                    v-model="name"
                                  />
                                  <span class="form-label">Name</span>
                                </div>
                              </div>
                            </div>
                            <div class="form-btn">
                              <button class="submit-btn">Book Now</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
              >
                <img
                  src="../assets/SNAP.gif"
                  class="img-fluid"
                  alt="Sample image"
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
body {
  background-image: linear-gradient(to right, #7b1fa2, #e91e63);
  overflow-x: hidden;
}

.section {
  position: relative;
  padding-top: 550px;
}
.justify-content-center {
  padding-top: 45px;
}
span {
  color: #dc3545;
}

.section .section-center {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

#booking {
  font-family: "Raleway", sans-serif;
}

.booking-form {
  position: relative;
  max-width: 642px;
  width: 100%;
  margin: auto;
  padding: 40px;
  overflow: hidden;
  background-image: url("https://www.smartphotoeditors.com/blog/wp-content/uploads/2019/11/Sony-A7R-III.jpg");
  background-size: cover;
  border-radius: 5px;
  z-index: 20;
}

.booking-form::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}

.booking-form .form-header {
  text-align: center;
  position: relative;
  margin-bottom: 30px;
}

.booking-form .form-header h1 {
  font-weight: 700;
  text-transform: capitalize;
  font-size: 42px;
  margin: 0px;
  color: #fff;
}

.booking-form .form-group {
  position: relative;
  margin-bottom: 30px;
}

.booking-form .form-control {
  background-color: rgba(255, 255, 255, 0.2);
  height: 60px;
  padding: 0px 25px;
  border: none;
  border-radius: 40px;
  color: #fff;
  -webkit-box-shadow: 0px 0px 0px 2px transparent;
  box-shadow: 0px 0px 0px 2px transparent;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.booking-form .form-control::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.booking-form .form-control:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.booking-form .form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.booking-form .form-control:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #ff8846;
  box-shadow: 0px 0px 0px 2px #ff8846;
}

.booking-form input[type="date"].form-control {
  padding-top: 16px;
}

.booking-form input[type="date"].form-control:invalid {
  color: rgba(255, 255, 255, 0.5);
}

.booking-form input[type="date"].form-control + .form-label {
  opacity: 1;
  top: 10px;
}

.booking-form select.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.booking-form select.form-control:invalid {
  color: rgba(255, 255, 255, 0.5);
}

.booking-form select.form-control + .select-arrow {
  position: absolute;
  right: 15px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 32px;
  line-height: 32px;
  height: 32px;
  text-align: center;
  pointer-events: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.booking-form select.form-control + .select-arrow:after {
  content: "\279C";
  display: block;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.booking-form select.form-control option {
  color: #000;
}

.booking-form .form-label {
  position: absolute;
  top: -10px;
  left: 25px;
  opacity: 0;
  color: #ff8846;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  height: 15px;
  line-height: 15px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.booking-form .form-group.input-not-empty .form-control {
  padding-top: 16px;
}

.booking-form .form-group.input-not-empty .form-label {
  opacity: 1;
  top: 10px;
}

.booking-form .submit-btn {
  color: #fff;
  background-color: #e35e0a;
  font-weight: 700;
  height: 60px;
  padding: 10px 30px;
  width: 100%;
  border-radius: 40px;
  border: none;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1.3px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.booking-form .submit-btn:hover,
.booking-form .submit-btn:focus {
  opacity: 0.9;
}
</style>
