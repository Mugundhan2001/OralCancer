<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { Button } from "@/components/ui/button";

const router = useRouter();
const authStore = useAuthStore();

function handleLogout() {
  authStore.signOut();
  router.push("/auth");
}
</script>

<template>
  <div>Home View works!</div>
  <Button @click="handleLogout">Logout</Button>
</template>
