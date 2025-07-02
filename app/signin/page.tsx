import { GoogleButton } from "@/components/google-button";
import { SignInForm } from "@/components/sigin-form";

export default function SignIn() {
  return (
    <div>
      <h1>SigIn</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
}
