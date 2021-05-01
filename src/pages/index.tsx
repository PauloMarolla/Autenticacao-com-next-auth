import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BtnDiscord } from '../components/BtnDiscord';
import { BtnInstagram } from '../components/BtnInstagram';
import { BtnLinkedin } from '../components/BtnLinkedin';
import {
  ContainerLogin,
  ContentLogin,
  Divider,
} from '../styles/pagesStyles/index';
import { useSession, signIn, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/signin');
  }, []);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <ContainerLogin>
        <ContentLogin>
          <section>
            <h1>Login</h1>

            <BtnInstagram />
            <BtnDiscord />
            <BtnLinkedin />

            <Divider>OR</Divider>
            <form method="post" action="api/auth/callback/credentials">
              <input name="csrfToken" type="hidden" />

              <label htmlFor="">E-mail</label>
              <input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                type="text"
              />
              <label htmlFor="">Password</label>
              <input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                type="password"
              />

              {!session && (
                <>
                  <h1>You are not signed in</h1> <br />
                  <button onClick={() => signIn('Credentials')}>Sign in</button>
                </>
              )}

              {session && (
                <>
                  <h1>Signed in as {session.user.email} </h1> <br />
                  <button onClick={() => signOut()}>Sign out</button>
                </>
              )}
            </form>
          </section>
        </ContentLogin>
      </ContainerLogin>
    </>
  );
}
