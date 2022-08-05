import { useContext, useRef, useState } from 'react';
import {
  IonPage
} from '@ionic/react';

import { AppContext, loggedIn } from '../State';

import { signup } from '../auth';

import urls from '../urls';

import './Form.css';
import RemotePage from '../remote/RemotePage';

const Signup = ({ track, history }: any) => {
  const { dispatch } = useContext<any>(AppContext);

  const [formErrors, setFormErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const formRef = useRef(null);

  const goTo = (path: string) => {
    history.push(path, { direction: 'forward' });
  }

  const handleSubmit = async (email: any, password: any) => {

    try {
      setShowLoading(true);

      const user = await signup(email, password);

      dispatch(loggedIn(user));

      history.replace(urls.APP_HOME);

      setShowLoading(false);
    } catch (e) {
      console.error(e);
      setShowLoading(false);
      setFormErrors(e as any);
    }
  }

  return (
    <IonPage>
      <RemotePage __id="signup" onSubmit={handleSubmit} showLoading={showLoading}
        setShowLoading={setShowLoading} formRef={formRef} goTo={goTo} />
    </IonPage>
  );
};

export default Signup;
