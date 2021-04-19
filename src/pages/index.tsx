import Head from 'next/head';
import { Container } from '../styles/globalStyles'
import { ContainerLogin ,ContentLogin, Divider } from '../styles/pagesStyles/index'

export default function Home() {
  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
    <ContainerLogin>
      <ContentLogin>
        <section>
          <h1>Login</h1>

        <Divider>OR</Divider>
        <form>

            <label htmlFor="">E-mail</label>
            <input type="text"/>
            <label htmlFor="">Password</label>
            <input type="password"/>
            <button type="submit">Sign In</button>
          
        </form>
        </section>
      </ContentLogin>
    </ContainerLogin>
    </>
  )
}
