import {useState} from 'react';
import {getCards, getCard} from '../services/cardService';
import useAxios from '../../hooks/useAxios';

const useCards = () => {
  const [cards, setCards] = useState (null);
  const [card, setCard] = useState (null);
  const [error, setError] = useState (null);
  const [pending, setPending] = useState (false);
  useAxios ();

  const requestStatus = (pending, error, cards, card) => {
    setPending (pending);
    setError (error);
    setCards (cards);
    setCard (card);
  };

  const handleGetCards = async () => {
    try {
      setPending (true);
      const cards = await getCards ();
      requestStatus (false, null, cards, null);
    } catch (error) {
      requestStatus (false, error, null, null);
    }
  };

  const handleGetCard = async cardId => {
    try {
      setPending (true);
      const card = await getCard (cardId);
      requestStatus (false, null, null, card);
    } catch (error) {
      requestStatus (false, error, null, null);
    }
  };

  return {cards, card, pending, error, handleGetCards, handleGetCard};
};

export default useCards;
