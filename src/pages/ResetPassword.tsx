import React, { useState, FormEvent } from 'react';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonPage,
  IonButtons,
  IonBackButton
} from "@ionic/react";

import { Link } from 'react-router-dom';

import { resetPassword } from '../auth';

import './Form.css';

export const ResetPassword = ({ history, match }: any) => {
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState(null);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    try {
      await resetPassword(email);
      setEmail('');
      alert('Password reset email sent');
    } catch (e: any) {
      setFormErrors(e.code as any);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/`} />
          </IonButtons>
          <IonTitle>Reset Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="form">
        <form onSubmit={e => handleSubmit(e as any)} action="post">
          <IonList>
            <IonItem>
              <IonLabel>Email</IonLabel>
              <IonInput type="email" value={email} onInput={e => setEmail(e.currentTarget.value as any)} />
            </IonItem>
            <IonButton expand="block" type="submit">Reset Password</IonButton>
          </IonList>
        </form>
        <div className="below-form">
          <Link to='/login'>Back to login</Link>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default ResetPassword;