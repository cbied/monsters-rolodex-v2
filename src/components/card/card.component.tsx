import './card.styles.css';
import { IMonster } from '../../App';


interface ICardProps {
  monster: IMonster
}

const Card = ({ monster }: ICardProps ) => {
  const { id, name, email } = monster;

  return (
    <div className='card-container'>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
