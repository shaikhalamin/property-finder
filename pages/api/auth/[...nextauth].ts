import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type CredentialsType = {
  email: string;
  password: string;
  csrfToken: string;
  callbackUrl: string;
  json: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as CredentialsType;
        if (email != "shaikh@test.com" || password != "1234") {
          return null;
        }
        return {
          email,
          password,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
    async redirect({ url, baseUrl }) {
        // Allows relative callback URLs
        //if (url.startsWith("/")) return `${baseUrl}${url}`
        // Allows callback URLs on the same origin
       // else if (new URL(url).origin === baseUrl) return url

        console.log({url,baseUrl })

        return url
      }
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
