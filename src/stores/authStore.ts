import { ref, inject } from "vue";
import { defineStore } from "pinia";
import { SupabaseClient, type User } from "@supabase/supabase-js";
import { v4 as uuid } from "uuid";

export const useAuthStore = defineStore("auth", () => {
  const supabase = inject("supabase") as SupabaseClient;

  const profileLoaded = ref(false);
  const user = ref<User | null>(null);

  async function getUser() {
    user.value = (await supabase.auth.getUser()).data.user;
    return user.value;
  }

  async function handleSignIn() {
    user.value = await getUser();
    profileLoaded.value = true;
  }

  async function signUpUsingEmail(email: string, password: string) {
    await supabase.auth.signUp({
      email: email,
      password: password,
    });
  }

  async function signInUsingEmail(email: string, password: string) {
    await supabase.auth.signInWithPassword({ email, password });
  }

  async function signInUsingGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth`,
      },
    });
    console.log("Signed in with google", await getUser());
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function uploadFile(file: File, ext: string) {
    const uploadedFile = await supabase.storage
      .from("media_gallery")
      .upload(`${user.value?.id}/${uuid()}${ext}`, file);

    if (!uploadedFile.data) {
      return null;
    }

    return supabase.storage.from("media_gallery").getPublicUrl(uploadedFile.data.path);
  }

  return {
    profileLoaded,
    user,
    getUser,
    handleSignIn,
    signUpUsingEmail,
    signInUsingEmail,
    signInUsingGoogle,
    signOut,
    uploadFile,
  };
});
