import { useCallback, useContext } from 'react';
import {
  IonPage
} from '@ionic/react';

import { AppContext, getHotTracks, getNewTracks, playTrack } from '../State';


import './Home.css';
import RemotePage from '../remote/RemotePage';

const Home = () => {
  const { state, dispatch } = useContext<any>(AppContext);

  const hotTracks = getHotTracks(state);
  const newTracks = getNewTracks(state);

  const doPlay = useCallback(track => {
    dispatch(playTrack(track));
  }, [playTrack]);

  return (
    <IonPage>
      <RemotePage __id="home" hotTracks={hotTracks} newTracks={newTracks} doPlay={doPlay} />
    </IonPage>
  );
};

export default Home;
