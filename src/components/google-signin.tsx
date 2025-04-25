
import { signIn } from "@/auth";
import { Button } from "./ui/button";

const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button className="w-full" variant="outline">
        Sign in with Google
      </Button>
    </form>
  );
};

export { GoogleSignIn };