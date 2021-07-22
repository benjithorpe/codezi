<script>
  let showNav = false;
</script>

<nav>
  <div class="logo">Codezi</div>

  <ul class:showMenu={showNav}>
    <li><a href="/">Home</a></li>
    <li><a href="/work">Work</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>

  <div class="menu" on:click={() => (showNav = !showNav)}>
    <div />
    <div />
    <div />
  </div>
</nav>

<style>
  .logo {
    font-size: 1.8rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-style: italic;
    color: #555;
  }
  nav {
    padding: 1.5em 2em;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #fff;
  }
  nav ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    position: absolute;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fcfcfc;
    font-size: 1.6rem;
    height: 0;
    border-bottom: 1px solid lightgray;
    transition: height 0.3s ease;
    overflow: hidden;
  }
  .showMenu {
    height: 7.5em;
  }
  nav a {
    text-decoration: none;
    color: royalblue;
  }
  .menu {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 3.25em;
    cursor: pointer;
  }
  .menu div {
    border: 2px solid #333;
  }

  @media (min-width: 400px) {
    nav {
      padding: 1.5em 2.5em;
    }
  }
  @media (min-width: 576px) {
    .menu {
      display: none;
    }
    nav {
      justify-content: space-between;
      border-bottom: 1px solid lightgray;
    }
    nav ul {
      flex-direction: row;
      gap: 1.5em;
      position: static;
      height: max-content;
      border: none;
    }
  }
  @media (min-width: 768px) {
    nav ul{
      font-size: 1.75rem;
    }
    nav a:hover {
      color: blue;
    }
  }
  @media (min-width: 992px) {
    nav{
      max-width: 75%;
      margin: auto;
    }
  }
</style>
