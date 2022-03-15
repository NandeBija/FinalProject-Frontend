<template>
  <div class="container" id="reset">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="text-center">
              <img
                src="https://img.icons8.com/ios-filled/150/000000/lock.png"
              />
              <h2 class="text-center">Forgot Password?</h2>
              <p>You can reset your password here.</p>
              <div class="panel-body">
                <form
                  id="register-form"
                  role="form"
                  autocomplete="off"
                  class="form"
                  method="post"
                >
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon"
                        ><img
                          src="https://img.icons8.com/ios/50/000000/apple-mail.png"
                      /></span>
                      <input
                        id="email"
                        name="email"
                        placeholder="email address"
                        class="form-control"
                        type="email"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      name="recover-submit"
                      class="btn btn-lg btn-primary btn-block"
                      value="Reset Password"
                      type="submit"
                    />
                  </div>

                  <input
                    type="hidden"
                    class="hide"
                    name="token"
                    id="token"
                    value=""
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.row {
  border: solid 1px rgba(128, 128, 128, 0.418);
  width: 650px;
  border-radius: 35px;
  padding-left: 10%;
}
#reset {
  padding-top: 150px;
}
form {
  margin: 60px;
}
.form-gap {
  padding-top: 70px;
}
.text-center img {
  padding-bottom: 25px;
  padding-left: 19%;
}

.form-group {
  margin: 20px;
}
</style>
