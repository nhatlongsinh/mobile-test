import React, { useCallback, useContext, useState } from 'react';

import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonList, IonListHeader, IonItem, IonThumbnail, IonLabel,
  IonButtons, IonButton, IonIcon, IonPopover
} from '@ionic/react';

import { ellipsisVertical, removeCircleOutline } from 'ionicons/icons';

import { AppContext, getRecentTracks, getFavTracks, playTrack, favTrack, logout } from '../State';

import { img } from '../util';

import urls from '../urls';

const You = ({ history }: any) => {
  const { state, dispatch } = useContext<any>(AppContext);

  const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);
  const recentTracks = getRecentTracks(state);
  const favTracks = getFavTracks(state);

  const doPlay = useCallback((track: any) => {
    dispatch(playTrack(track));
  }, [playTrack]);

  const doLogout = useCallback(async () => {
    setShowUserMenuEvent(null);
    dispatch(logout());
    history.push(urls.LOGIN);
  }, [dispatch, history]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Library</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" onClick={(e: any) => { e.persist(); setShowUserMenuEvent(e as any) }}>
              <IonIcon icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonPopover
          event={showUserMenuEvent}
          isOpen={!!showUserMenuEvent}
          onDidDismiss={() => setShowUserMenuEvent(null)}>
          <IonContent>
            <IonList>
              <IonItem onClick={e => { e.preventDefault(); doLogout() }} detail={true} href="">
                <IonLabel>Log out</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPopover>
        <IonList>
          <IonListHeader>
            <IonLabel>Recent Tracks</IonLabel>
          </IonListHeader>
          {recentTracks.map((track: { title: {} | null | undefined; img: any; artist: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
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
        </IonList>

        <IonList>
          <IonListHeader>
            <IonLabel>Favorite Tracks</IonLabel>
          </IonListHeader>
          {favTracks.map((track: { title: {} | null | undefined; img: any; artist: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
            <IonItem key={track.title as any} onClick={() => doPlay(track)} button>
              <IonThumbnail slot="start">
                <img src={img(track.img)} />
              </IonThumbnail>
              <IonLabel>
                <h2>{track.title}</h2>
                <p>{track.artist}</p>
              </IonLabel>
              <IonIcon
                onClick={e => { e.stopPropagation(); dispatch(favTrack(track)) }}
                icon={removeCircleOutline} slot="end" />
            </IonItem>
          ))}

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default You;
