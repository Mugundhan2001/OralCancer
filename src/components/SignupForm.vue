<script setup lang="ts">
import { reactive } from "vue";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/stores/authStore";

const emit = defineEmits(["login"]);
const authStore = useAuthStore();

const formData = reactive({
  email: "",
  password: "",
});

function handleLogin() {
  emit("login");
}

async function handleSignUpWithEmail() {
  if (!formData.email || !formData.password) return;

  await authStore.signUpUsingEmail(formData.email, formData.password);
  formData.email = "";
  formData.password = "";
}

async function handleSignUpWithGoogle() {
  await authStore.signInUsingGoogle();
}
</script>

<template>
  <form :class="cn('flex flex-col gap-6')">
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-2xl font-bold">Create a new account</h1>
      <p class="text-balance text-sm text-zinc-500 dark:text-zinc-400">
        Enter your email below to create your account
      </p>
    </div>
    <div class="grid gap-6">
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="mugi@example.com"
          required
          v-model="formData.email"
        />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center">
          <Label for="password">Password</Label>
        </div>
        <Input id="password" type="password" required v-model="formData.password" />
      </div>
      <Button type="button" class="w-full" @click="handleSignUpWithEmail"> Sign Up </Button>
      <div
        class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-zinc-200 dark:after:border-zinc-800"
      >
        <span class="relative z-10 bg-white px-2 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
          Or continue with
        </span>
      </div>
      <Button variant="outline" class="w-full" @click="handleSignUpWithGoogle">
        <svg
          width="800"
          height="800"
          viewBox="-3 0 262 262"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            fill="#4285F4"
          />
          <path
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            fill="#34A853"
          />
          <path
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
            fill="#FBBC05"
          />
          <path
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            fill="#EB4335"
          />
        </svg>
        Sign Up with Google
      </Button>
    </div>
    <div class="text-center text-sm">
      Already have an account?
      <button @click="handleLogin" class="underline underline-offset-4">Login</button>
    </div>
  </form>
</template>
