import { getCsrfToken, useSession } from 'next-auth/client';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession, csrfToken, providers, signin } from 'next-auth/client';
import {
  ContainerLogin,
  ContentLogin,
  Divider,
} from '../../styles/pagesStyles/signin';
import { BtnInstagram } from '../../components/BtnInstagram';
import { BtnDiscord } from '../../components/BtnDiscord';
import { BtnLinkedin } from '../../components/BtnLinkedin';

export default function SignIn({ csrfToken }) {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <ContainerLogin>
        <ContentLogin>
          <section>
            <h1>Login</h1>
            <h1>{(session && session.user.email) ?? ''}</h1>

            <BtnInstagram />
            <BtnDiscord />
            <BtnLinkedin />

            <Divider>OR</Divider>
            <form method="post" action="/api/auth/callback/credentials">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <label>
                E-mail
                <input name="email" type="text" />
              </label>
              <label>
                Password
                <input name="password" type="password" />
              </label>
              <button type="submit">Sign in</button>
            </form>
          </section>
        </ContentLogin>
      </ContainerLogin>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.acessToken) {
    res.writeHead(302, {
      Location: '/auth/signin',
    });
    res.end();
    return;
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};
