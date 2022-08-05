import React, { useCallback, useContext, useRef, useState } from 'react';
import {
  IonContent, IonHeader, IonItem, IonLabel, IonList,
  IonLoading, IonPage, IonSearchbar, IonThumbnail, IonTitle, IonToolbar,
  useIonViewDidEnter
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
      <IonContent className='jason-content'>
        {[...Array(100)].map((x, index) => (
          <RemotePage key={index} __id={`search$(index)`} doSearch={doSearch} searchbarRef={searchbarRef} tracks={tracks} doPlay={doPlay} />))}
      </IonContent>
    </IonPage>
  );
};

export default Search;