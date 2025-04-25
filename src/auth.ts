import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials:{
        email:{},
        password:{},
      },
      authorize: async (credentials) => {
        const email ="user@admin.com";
        const password ="1234";

        if (credentials.email === email && credentials.password === password){
          return { email, password };
        } else{
          throw new Error('Invalid credentials.');
        }
      },
    }),
  ],
})