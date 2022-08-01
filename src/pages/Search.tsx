import React, { useCallback, useContext, useRef, useState } from 'react';
import {
  IonContent, IonHeader, IonItem, IonLabel, IonList,
  IonLoading, IonPage, IonSearchbar, IonThumbnail, IonTitle, IonToolbar,
  useIonViewDidEnter
} from '@ionic/react';

import { AppContext, playTrack } from '../State';

import { search } from '../search';

import { img } from '../util';

const Search = () => {
  const { state, dispatch } = useContext<any>(AppContext);
  const [isSearching, setIsSearching] = useState(false);
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar ref={searchbarRef} onIonChange={doSearch} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {tracks.map((track: { title: {} | null | undefined; img: any; artist: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
          <IonItem key={track.title as any} onClick={() => doPlay(track)} button>
            <IonThumbnail slot="start">
              <img src={img(track.img)} />
            </IonThumbnail>
            <IonLabel>
              <h2>{track.title}</h2>
              <p>{track.artist}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Search;