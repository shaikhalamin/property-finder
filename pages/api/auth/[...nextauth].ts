import { login } from "@/data/api/auth";
import NextAuth, { DefaultUser, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import * as jwt from "jsonwebtoken";

type CredentialsType = {
  username: string;
  password: string;
  csrfToken: string;
  callbackUrl: string;
  json: string;
};

type ApiUser = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  isActive: boolean;
  isVerified: boolean;
  role: string;
};

type LoginResponse = {
  access_token: string;
  refresh_token: string;
  user: ApiUser;
};

type LoggedInUser = DefaultUser & LoginResponse;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials, req) => {
        try {
          const { username, password } = credentials as CredentialsType;
          const response = await login({ username, password });
          if (response.data) {
            return response.data;
          }
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    jwt: async ({ token, user, profile }) => {
      if (user) {
        const loggedInUser = user as LoggedInUser;
        const decoded = jwt.verify(
          loggedInUser.access_token,
          "accessTokenSecret"
        );
        console.log("decode", decoded);
        token.jwt = loggedInUser.access_token;
        token.accessTokenExpires = Date.now() + (decoded as any).exp * 1000;
          (token.accessToken = loggedInUser.access_token);
        token.refreshToken = loggedInUser.refresh_token;
        token.user = loggedInUser.user;
        console.log("modified token ", token);

        return token;
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        (session as any).role = token.role;
        (session as any).accessToken = token.accessToken;
        (session as any).refreshToken = token.refreshToken;
        (session as any).user = token.user;
        (session as any).accessTokenExpires = token.accessTokenExpires;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // console.log({ url, baseUrl });
      return url;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
