<script>
  window.addEventListener('load', () => {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
      document.querySelector('nav ul').classList.toggle('showNav');
    });
  });
</script>

<nav>
  <div class="logo">Codezi</div>
  <ul>
    <li><a href="/">Navigation</a></li>
    <li><a href="/">Navigation</a></li>
    <li><a href="/">Navigation</a></li>
    <li><a href="/">Navigation</a></li>
  </ul>
  <div class="burger">
    <div></div>
    <div></div>
    <div></div>
  </div>
</nav>

<style>
  .logo { font-size: 2rem; }
</style>
