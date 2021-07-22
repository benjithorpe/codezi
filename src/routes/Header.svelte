<script></script>

<header>
  <div class="intro">
    <h1>Codezi</h1>

    <p>
      We convert your business &amp; ideas into a beautiful and working website
      that helps grow your business.
    </p>
    <p>
      We are a team of expert web designers and developers in Freetown, Sierra
      Leone. <strong>We are here to help you succeed online</strong>.
    </p>

    <a href="mailto:codezi@protonmail.com" class="cta">Contact Us</a>
  </div>

  <div class="svg">
    <img src="../../assets/website.svg" alt="" />
  </div>
</header>

<style>
  header {
    padding: 1em;
    padding-top: 2em;
  }
  .intro {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }
  h1 {
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
  }
  .intro p {
    padding: 0.5em 1.5em;
    font-size: 1.56rem;
    text-align: center;
    line-height: 1.5;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #444;
  }
  .cta {
    align-self: center;
    border: none;
    border-radius: 4px;
    margin: 0.5em 0;
    padding: 0.7em 1em;
    font-size: 1.75rem;
    font-weight: bold;
    color: white;
    background-color: rgb(64, 182, 182);
  }
  .svg img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 400px) {
  }
  @media (min-width: 576px) {
    h1 {
      font-size: 3.5rem;
    }
    .intro p {
      font-size: 1.75rem;
      max-width: 55ch;
      margin: auto;
    }
    .svg {
      max-width: 75%;
      margin: auto;
    }
  }
  @media (min-width: 768px) {
    header {
      display: flex;
      align-items: center;
    }
    header > div {
      flex: 1;
    }
    h1 {
      font-size: 4rem;
    }
    .cta:hover {
      background-color: rgb(60, 151, 151);
    }
  }
  @media (min-width: 992px) {}
</style>
