import {useState} from 'react';
import {getCards} from '../services/cardService';
import useAxios from '../../hooks/useAxios';

const useCards = () => {
  const [cards, setCards] = useState (null);
  const [card, setCard] = useState (null);
  const [error, setError] = useState (null);
  const [pending, setPending] = useState (false);

  useAxios ();

  const requestStatus = (pending, error, cards) => {
    setPending (pending);
    setError (error);
    setCards (cards);
  };

  const handleGetCards = async () => {
    try {
      setPending (true);
      const cards = await getCards ();
      requestStatus (false, null, cards);
    } catch (error) {
      requestStatus (false, error, null);
    }
  };

  return {cards, pending, error, handleGetCards};
};

export default useCards;
