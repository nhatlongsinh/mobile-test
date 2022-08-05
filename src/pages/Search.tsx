import { useCallback, useContext, useRef, useState } from 'react';
import {
  IonPage, useIonViewDidEnter
} from '@ionic/react';

import { AppContext, playTrack } from '../State';

import { search } from '../search';

import RemotePage from '../remote/RemotePage';

const Search = () => {
  const { state, dispatch } = useContext<any>(AppContext);
  const [tracks, setTracks] = useState<any>([]);
  const searchbarRef = useRef<any>();

  const doSearch = useCallback(async (e) => {
    const q = e.target.value;

    if (!q) {
      setTracks([]);
      return;
    }

    setTracks(await search(q, state));
  }, [search, setTracks]);

  const doPlay = useCallback(track => {
    dispatch(playTrack(track))
  }, []);

  // Use this pattern to focus a search box whenever the
  // page enters from a navigation event
  useIonViewDidEnter(() => {
    searchbarRef.current?.setFocus();
  })
  return (
    <IonPage>
      <RemotePage __id="search" doSearch={doSearch} searchbarRef={searchbarRef} tracks={tracks} doPlay={doPlay} />
    </IonPage >
  );
};

export default Search;