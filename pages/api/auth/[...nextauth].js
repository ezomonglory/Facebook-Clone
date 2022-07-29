import NextAuth from "next-auth"
import FacebookProvider from 'next-auth/providers/facebook'

export const authOptions= {
  providers: [
    // OAuth authentication providers...
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ]
}


export default NextAuth(authOptions)