
import axios from 'axios'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'E-mail', type: 'text', placeholder: 'teste' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(`${process.env.API_URL}login`, {email: credentials.email, password: credentials.password}, {headers: {'Content-Type': 'application/json'}});
          // console.log(response);
          return response.data;
        } catch(error) {
          // console.log(error.response);
        }
       
        return {email: 'abc@20', password: 'abc1020'};
      },
    }),
  
  ],
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
        console.log(token);
        console.log(user);
        // console.log(account);
        user && (token.user = user);
        return Promise.resolve(token)   
    },
    session: async (session, user, sessionToken) => {
      session.user = user.user;
        return Promise.resolve(session)
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/logout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: null
  },
  session: {
    jwt: true
  },

}

export default (req, res) => NextAuth(req, res, options);



