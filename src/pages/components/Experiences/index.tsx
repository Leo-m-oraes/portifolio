import { ExperiencesItem } from "./ExperiencesItem";
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';



export function Experiences() {
  return (
    <Container>
      <SectionTitle title="Projetos" description="Front-end"/>
     <section>
      <ExperiencesItem title="Dev Front-end" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
      <ExperiencesItem title="Dev Front-end" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
      <ExperiencesItem title="Dev Front-end" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
      <ExperiencesItem title="Dev Front-end" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
     </section>
   
    </Container>
  );
}
