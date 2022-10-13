import { login } from "@/data/api/auth";
import NextAuth, { DefaultUser, NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

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
  expires_at: number;
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
    jwt: async ({ token, user }) => {
      if (user) {
        const loggedInUser = user as LoggedInUser;
        token.expires_at = loggedInUser.expires_at;
        token.access_token = loggedInUser.access_token;
        token.refresh_token = loggedInUser.refresh_token;
        token.user = loggedInUser.user;
        return token;
      }

      if ((token as any).expires_at < Date.now()) {
        console.log(
          JSON.stringify({ msg: "refresh token rotation need to call" })
        );
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
      return url;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);



export const refreshAccessToken = async (token:JWT)=> {
  try {
    
    const refreshTokenUrl = '';

    const response = await fetch(refreshTokenUrl, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    })

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_at * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}
