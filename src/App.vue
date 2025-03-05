<script setup lang="ts">
import { inject } from "vue";
import { RouterView } from "vue-router";
import { SupabaseClient } from "@supabase/supabase-js";
import { useAuthStore } from "./stores/authStore";

const authStore = useAuthStore();
const supabase = inject("supabase") as SupabaseClient;

supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN") {
    authStore.handleSignIn();
  }
});
</script>

<template>
  <RouterView />
</template>
