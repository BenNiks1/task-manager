<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { getPosts } from "@/api/posts";

const store = useStore();
onMounted(async () => {
  try {
    const response = await getPosts();
    response.forEach((item) => store.commit("posts", item));
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <nav>
    <RouterLink to="/">Список</RouterLink>
    <RouterLink to="/create">Создать</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
