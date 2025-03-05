<script setup lang="ts">
import { ref } from "vue";
import { GalleryVerticalEnd } from "lucide-vue-next";
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";

const isLogin = ref(true);
</script>

<template>
  <div class="grid min-h-svh lg:grid-cols-2">
    <div class="flex flex-col gap-4 p-6 md:p-10">
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
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-xs">
          <LoginForm v-if="isLogin" @signup="isLogin = false" />
          <SignupForm v-else @login="isLogin = true" />
        </div>
      </div>
    </div>
    <div class="relative hidden bg-muted lg:block">
      <img
        src="/placeholder.svg"
        alt="Image"
        class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>
