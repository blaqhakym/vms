// lib/actions.ts
"use server"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "./firebase"

export const signinAction = async (formData: FormData) => {
  const email = String(formData.get("email") ?? "")
  const password = String(formData.get("password") ?? "")
  const auth = getAuth(app)

  try {
    const userCredential = await signInWithEmailAndPassword(auth,  email, password )
    return { user: userCredential.user, error: null }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
      if (e.code === "auth/user-not-found") {
        return { user: null, error: "Invalid credentials." }
      }
      if (e.code === "auth/wrong-password") {
        return { user: null, error: "Invalid credentials." }
      }
    return { user: null, error: e.code }
  }
}