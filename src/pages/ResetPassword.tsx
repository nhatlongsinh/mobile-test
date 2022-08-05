import { useState } from 'react';

import {
  IonPage
} from "@ionic/react";


import { resetPassword } from '../auth';

import './Form.css';
import RemotePage from '../remote/RemotePage';

export const ResetPassword = ({ history, match }: any) => {
  const [formErrors, setFormErrors] = useState(null);

  const handleSubmit = async (email: any) => {
    try {
      await resetPassword(email);
      alert('Password reset email sent');
    } catch (e: any) {
      setFormErrors(e.code as any);
    }
  }

  return (
    <IonPage>
      <RemotePage __id="reset" submit={handleSubmit} onBack={() =>
        history.push('/')} />
    </IonPage>
  );
}

export default ResetPassword;