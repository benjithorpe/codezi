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
    <li>New Tab</li>
    <li>Settings</li>
    <li>Navigation</li>
    <li>Navigation</li>
  </ul>
  <div class="burger">
    <div></div>
    <div></div>
    <div></div>
  </div>
</nav>

<style>
  .logo { font-size: 2rem; }
  ul li{
    color: #4169e1;
    cursor: pointer;
  }
  ul li:hover{ color: blue;}
</style>
