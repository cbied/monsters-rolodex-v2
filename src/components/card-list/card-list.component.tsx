import Card from '../card/card.component.tsx';
import { IMonster } from '../../App.tsx';
import './card-list.styles.css';

interface ICardProps {
  monsters: IMonster[]
}

const CardList = ({ monsters }: ICardProps) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
