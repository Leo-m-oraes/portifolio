/* eslint-disable import/order */
import Link from 'next/link';
import { ItemContainer } from './styles';
import {AiOutlineRightCircle} from 'react-icons/ai';

interface ExperiencesProps{
  title: string;
  description:string;
}

export function ExperiencesItem( {title, description}: ExperiencesProps) {
  return (
    <ItemContainer>
      <div>
        <h2>{title}</h2>
        <p>{description} </p>
        
        <div className="Link">
        <Link href="/projeto">
          <a>
          Ver projeto <AiOutlineRightCircle/>
          </a>

        </Link>
        </div>
        
      </div>

    </ItemContainer>

  )};