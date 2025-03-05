<script lang="ts">
export const description = 'A two column login page with a cover image.'
</script>

<script setup lang="ts">
import LoginForm from '@/registry/new-york/block/Login02/components/LoginForm.vue'
import { GalleryVerticalEnd } from 'lucide-vue-next'
</script>

<template>
  <div class="grid min-h-svh lg:grid-cols-2">
    <div class="flex flex-col gap-4 p-6 md:p-10">
      <div class="flex justify-center gap-2 md:justify-start">
        <a href="#" class="flex items-center gap-2 font-medium">
          <div class="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900">
            <GalleryVerticalEnd class-name="size-4" />
          </div>
          Acme Inc.
        </a>
      </div>
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
    </div>
    <div class="relative hidden bg-zinc-100 lg:block dark:bg-zinc-800">
      <img
        src="/placeholder.svg"
        alt="Image"
        class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      >
    </div>
  </div>
</template>
