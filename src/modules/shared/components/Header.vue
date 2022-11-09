<template>
  <nav class="navbar bg-primary toolbar-mov">
    <div class="container-fluid py-3">
      <img width="140" alt="Lc Logo" src="@/assets/logolcprograming.png" />
      <a href="https://github.com/Luiscrd" target="_blank" class="link-github">
        <span class="span-lc">LcrPrograming</span>
        <img src="@/assets/github_PNG40.png" alt="Github" class="logo-github">
      </a>
    </div>
  </nav>
  <div class="toolbar" role="banner">
    <img width="100" alt="Lc Logo" src="@/assets/logolcprograming3.png" />
    <span>Salvar al mundo - Vue</span>
    <img width="50" alt="Vue Logo" src="@/assets/logo_vue.png" />
    <div class="spacer"></div>
    <a href="https://github.com/Luiscrd" target="_blank" class="link-github">
      <span class="span-lc">LcrPrograming</span>
      <img src="@/assets/github_PNG40.png" alt="Github" class="logo-github">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<style scoped>
p {
  margin: 0;
}

a,
a:visited,
a:hover {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #341948;
}

.spacer {
  flex: 1;
}

.toolbar {
  position: relative;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  background-color: #341948;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}

.toolbar-mov {
  display: none;
}

.toolbar img {
  margin: 0 16px;
}

.link-github {
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  align-items: center;
}

.link-github:hover {
  opacity: 0.5;
}

.span-lc {
  position: relative;
  color: white;
}

.logo-github {
  width: 50px;
}

@media screen and (max-width: 420px) {
  .toolbar {
    display: none;
  }

  .toolbar-mov {
    display: flex;
    justify-content: space-around;
  }

  .logo-github {
    width: 30px;
    margin-left: 10px;
  }

  .link-github {
    font-weight: bold;
  }

}
</style>