import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleSubmit = async (initialState: any, formData: FormData) => {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const auth = getAuth(app);
  if (
    !email ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  ) {
    return { error: "Not a valid email", user: null };
  }

  if (!password || password.length < 6) {
    return { error: "password must be at least 6 characters", user: null };
  }
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    // console.log("user ", user);
    window.sessionStorage.setItem("user", JSON.stringify(user))
    return { user, error: null };
  } catch (error) {
    return {
      user: null,
      error: error instanceof Error ? error.message : "Login failed",
    };
  }
};
