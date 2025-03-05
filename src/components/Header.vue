<script setup lang="ts">
import { useRouter } from "vue-router";
import { GalleryVerticalEnd } from "lucide-vue-next";
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
  <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
    <div class="flex justify-center gap-2 md:justify-start">
      <div class="flex items-center gap-2 font-medium">
        <div
          class="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground"
        >
          <GalleryVerticalEnd class-name="size-4" />
        </div>
        OCD Inc.
      </div>
    </div>
    <div class="flex-1"></div>
    <Button @click="handleLogout">Logout</Button>
  </header>
</template>
