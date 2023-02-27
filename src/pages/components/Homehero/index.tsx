
import { Container, TextContainer, InfosContainer, CodeItem} from './styles';
import picture from '../../../assets/pessoa.webp'


export function Homehero() {
  return (
    <Container>
      <img src={ picture } alt="my photo" />
      <div>
        <TextContainer>
          <h1>Olá, </h1>
          <h2>Me chamo Leonardo!</h2>
        </TextContainer>
        <InfosContainer>
            <CodeItem>
              <span className='comment'>//Minha Apresentação</span>
              <span className='infoPurple'>Infos</span> {'\u007b'}
              <div>
                Nome: <span className='nameBlue'>Leonardo,</span>  
              </div>
              <div>
                Sobrenome: <span className='nameBlue'>Moraes</span>  
              </div>
              {'\u007d'}
            </CodeItem>
            <CodeItem>

              <span className='infoPurple'>Cargo</span> {'\u007b'}
              <div>
                Função: <span className='nameBlue'>Desenvolvedor Front-end</span>  
              </div>
             
              {'\u007d'}
            </CodeItem>
        </InfosContainer>
      </div>
      
    </Container>
  );
}
