<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { postPosts } from "@/api/posts";
import TextInput from "@/components/TextInput.vue";
import CustomSelector from "@/components/CustomSelector.vue";
import CustomTextarea from "@/components/CustomTextarea.vue";

const form = ref({
  title: "",
  dataTime: "",
  selectedType: "Личное",
  body: "",
});

const isLoading = ref(false);
const types = ref(["Личное", "Работа", "Дом", "Животные"]);
const store = useStore();
const router = useRouter();

async function onSubmit(e) {
  e.preventDefault();

  try {
    isLoading.value = true;
    await postPosts(form.value);
    store.commit("posts", form.value);
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
    router.push({ name: "list" });
  }
}
</script>

<template>
  <div class="container create">
    <div v-if="isLoading">Loading...</div>
    <form class="create__form" @submit="onSubmit" v-else>
      <div class="create__form_wrapper">
        <TextInput id="title" labelText="Заголовок" v-model="form.title" />
        <TextInput id="dataTime" labelText="Дата" v-model="form.dataTime" />
        <CustomSelector
          id="type"
          labelText="Тип"
          v-model="form.selectedType"
          :options="types"
        />
        <CustomTextarea id="body" labelText="Содержимое" v-model="form.body" />
      </div>
      <button type="submit">Создать</button>
    </form>
  </div>
</template>

<style scoped>
.create {
  display: flex;
}

.create__form,
.create__form_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 10px;
  width: 100%;
}

button {
  max-width: 400px;
  width: 100%;
  height: 30px;
  border-radius: 7px;
}
</style>
