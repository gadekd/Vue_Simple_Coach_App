<template>
    <header>
        <nav>
            <h1>
                <router-link to="/">Find a Coach</router-link>
            </h1>
            <ul>
                <li>
                    <router-link to="/coaches">All Coaches</router-link>
                </li>
                <li>
                    <router-link to="/requests">Requests</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  /* background-color: #3d008d; */
  background-color: var(--base-darkest);
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  /* color: #f391e3; */
  color: var(--base-light);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  /* border: 1px solid #f391e3; */
  border: 1px solid var(--base-light);
}

h1 {
  margin: 0;
}

h1 a {
  /* color: white; */
  color: var(--base-lightest);
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>