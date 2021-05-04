import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import {
  ContainerHome,
  ContentHome,
  Descriptions,
  LoggedWith,
} from '../styles/pagesStyles/home';

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   router.push('/auth/signin');
  // }, []);

  return (
    <>
      <ContainerHome>
        <ContentHome>
          <Descriptions>
            <h2>Olá, seja bem vindo!</h2>
            <p>
              Essa página é privada 🔏, apenas pessoas que realizaram login
              podem acessa-la
            </p>
            <span>Seu E-mail de acesso</span>
            <strong>Paulo.ricardo.marolla@hotmail.com</strong>
          </Descriptions>
          <LoggedWith>
            <h4>Logado com</h4>
            <button>Linkedin</button>
          </LoggedWith>
        </ContentHome>
      </ContainerHome>
    </>
  );
}
