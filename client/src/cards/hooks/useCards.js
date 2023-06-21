import {useCallback, useState} from 'react';
import {getCards, getCard, creatCard} from '../services/cardService';
import useAxios from '../../hooks/useAxios';
import {getMyCards} from '../services/cardService';
import normalizeCard from '../helpers/normalization/normalizeCard';
import {useSnack} from '../../providers/SnackbarProvider';
import {useNavigate} from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

const useCards = () => {
  const [cards, setCards] = useState (null);
  const [card, setCard] = useState (null);
  const [error, setError] = useState (null);
  const [pending, setPending] = useState (false);
  useAxios ();

  const {setSnack} = useSnack ();
  const navigate = useNavigate ();

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

  const handleGetMyCards = useCallback (async () => {
    try {
      setPending (true);
      const cards = await getMyCards ();
      requestStatus (false, null, cards, null);
    } catch (error) {
      requestStatus (false, error, null, null);
    }
  }, []);

  const handleCreateCard = useCallback (
    async cardFromClient => {
      try {
        setPending (true);
        const normalCard = normalizeCard (cardFromClient);
        const card = await creatCard (normalCard);
        requestStatus (false, null, null, card);
        setSnack ('success', 'Your card been added!');
        navigate (ROUTES.MAY_CARDS);
      } catch (error) {
        requestStatus (false, error, null, null);
      }
    },
    [navigate, setSnack]
  );

  return {
    cards,
    card,
    pending,
    error,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleCreateCard,
  };
};

export default useCards;
