<template>
  <section id="section">
    <div class="curved">
      <h1>We are <span>SnapAway!</span></h1>
      <h2>Providing you with the best photographers in the game.</h2>
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              src="https://www.smartphotoeditors.com/blog/wp-content/uploads/2019/11/Sony-A7R-III.jpg"
              alt=""
            />
          </div>
          <div class="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illo
              accusantium aliquam dolore fuga aliquid, dolorum rem veritatis
              provident, vel unde sunt veniam. Eos cum deserunt doloribus quis
              ipsam facilis?Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Asperiores excepturi velit beatae rem tenetur eligendi
              assumenda, minima consectetur corporis quo, molestiae a ipsa!
              Commodi iusto voluptatibus voluptas alias cumque aspernatur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Est illo
              accusantium aliquam dolore fuga aliquid, dolorum rem veritatis
              provident, vel unde sunt veniam. Eos cum deserunt doloribus quis
              ipsam facilis?Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Asperiores excepturi velit beatae rem tenetur eligendi
              assumenda, minima consectetur corporis quo, molestiae a ipsa!
              Commodi iusto voluptatibus voluptas alias cumque aspernatur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Est illo
              accusantium aliquam dolore fuga aliquid, dolorum rem veritatis
              provident, vel unde sunt veniam. Eos cum deserunt doloribus quis
              ipsam facilis?Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L48,176C96,192,192,224,288,245.3C384,267,480,277,576,256C672,235,768,181,864,176C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>

.curved {
  background-color: brown;
  color: white;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 150px;
  
}
.container{
  min-height: 30vh;
  padding-top: 10px
}
.curved h1 {
  font-size: 4rem;
  margin-top: 0;
}
h2 {
  color: grey;
  font-size: 1.5rem;
}
img {
  max-width: 500px;
}
.curved p {
  font-size: 1rem;
  margin: 0 5rem, 0, 5rem;
}
span {
  color: #dc3545;
}
svg {
  display: block;
}
button {
  color: greenyellow;
  background-color: rgb(220, 227, 245);
  position: relative;
  bottom: 100px;
}
</style>
