// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";

// const myOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "jane@doe.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { data } = await axios.post(
//           `http://localhost:1337/api/auth/local`,
//           {
//             identifier: credentials.email,
//             password: credentials.password,
//           }
//         );
//         console.log("here is the data from strapi", data);
//         if (data) return data;
//         else {
//           console.log("caught error");
//           return null;
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.JWT_SECRET,
//   callbacks: {
//     async jwt({ token, user, account, profile, isNewUser }) {
//       if (user) {
//         token.jwt = user.jwt;
//         token.id = user.user.id;
//         token.name = user.user.username;
//         token.email = user.user.email;
//       }
//       return token;
//     },
//     async session({ session, token, user }) {
//       session.jwt = token.jwt;
//       session.id = token.id;
//       return session;
//     },
//   },
// };

// export default (req, res) => NextAuth(req, res, myOptions);
