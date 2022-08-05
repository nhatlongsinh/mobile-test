import { useCallback, useContext } from 'react';

import {
  IonPage
} from '@ionic/react';
import { ellipsisVertical, removeCircleOutline } from 'ionicons/icons';


import { AppContext, getRecentTracks, getFavTracks, playTrack, favTrack, logout } from '../State';


import urls from '../urls';
import RemotePage from '../remote/RemotePage';

const You = ({ history }: any) => {
  const { state, dispatch } = useContext<any>(AppContext);

  const recentTracks = getRecentTracks(state);
  const favTracks = getFavTracks(state);

  const doPlay = useCallback((track: any) => {
    dispatch(playTrack(track));
  }, [playTrack]);

  const doLogout = useCallback(async () => {
    dispatch(logout());
    history.push(urls.LOGIN);
  }, [dispatch, history]);

  return (
    <IonPage>
      <RemotePage __id="you" doLogout={() => doLogout()} recentTracks={recentTracks} doPlay={(track: any) => doPlay(track)} favTracks={favTracks} favTrack={(track: any) => dispatch(favTrack(track))} clearIcon={ellipsisVertical} removeIcon={removeCircleOutline} />
    </IonPage>
  );
};

export default You;
