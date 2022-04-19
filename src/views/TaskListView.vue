<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TaskItem from "@/components/TaskItem.vue";

const store = useStore();
const posts = computed(() => store.state.posts);
const lastFivePosts = computed(() => posts.value.slice(0, 5));
</script>

<template>
  <div class="container">
    <div v-for="post in lastFivePosts" :key="post.id">
      <TaskItem
        :title="post.title"
        :body="post.body"
        :dataTime="post?.dataTime"
        :type="post?.selectedType"
        :userId="post?.userId"
      />
    </div>
    <div>Всего {{ posts.length }} записей</div>
  </div>
</template>
