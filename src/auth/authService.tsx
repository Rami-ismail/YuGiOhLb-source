import { auth, signInWithGoogleRedirect } from "../firebase/fireBase-Init";


export const signInWithGoogle = async () => {
  try {
    const result = await signInWithGoogleRedirect()
    return result;
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    throw error;
  }
};


export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error; 
}
};