import User from "@models/User";
import { ConnectToDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({
          email: session.user?.email,
        });

        session.user.id = sessionUser._id;

        return session;
      } catch (error) {
        console.log(error);
      }
    },
    async signIn({ profile }) {
      try {
        await ConnectToDB();

        //check if the user already exist
        const userExist = await User.findOne({
          email: profile?.email,
        });

        //if not, create a new user
        if (!userExist) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
