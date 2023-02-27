import { Header } from './components/Header';
import { HomeContainer } from '../styles/HomeStyles';
import { Homehero } from './components/Homehero';
import { Experiences } from './components/Experiences';
import { Knowledge } from './components/Knowledge';


export default function Home() {
  return (
    <HomeContainer>
      <Header />;
     <main className="container">
      <Homehero />
      <Experiences/>
      <Knowledge/>
     </main>

    </HomeContainer>
  )
}
