import { auth } from "@/auth";
import { signIn } from "@/auth";
import { GoogleSignIn } from "@/components/google-signin";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { executeAction } from "@/lib/executeAction";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <Card className="w-[450px]">
      <h1 className="mb-5 text-4xl font-bold text-center tracking-tight">Sign In</h1>
      <GoogleSignIn/>
      <div className="relative flex justify-center text-sm text-[#0C0D11]/[.7] font-medium my-3">
          Or, Continue with Email
      </div>
      <form
        className="space-y-4"
        action={async (formData) => {
          "use server";
          await executeAction({
            actionFn: async () => {
              await signIn("credentials", formData);
            },
          });
        }}
      >
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="current-password"
        />
        <Button className="w-full" variant="default" type="submit">
          Sign In
        </Button>
      </form>

      <div className="text-sm text-[#0C0D11]/[.7] font-semibold text-center flex items-center justify-center">
        Don&apos;t have an account?
        <Button asChild variant="link" className="py-0 px-1">
          <Link href="/sign-up" className="text-[#0051FF] font-semibold">Sign up</Link>
        </Button>
      </div>
    </Card>
  );
};

export default Page;