import { useContext, useRef, useState } from 'react';
import {
  IonPage
} from '@ionic/react';

import { AppContext, loggedIn } from '../State';

import { login } from '../auth';
import urls from '../urls';

import './Form.css';
import RemotePage from '../remote/RemotePage';

const Login = ({ track, history }: any) => {
  const { dispatch } = useContext<any>(AppContext);
  const [formErrors, setFormErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const formRef = useRef(null);

  const goTo = (path: string) => {
    history.push(path, { direction: 'forward' });
  }
  const closeLoading = () => {
    setShowLoading(false)
  }
  const handleSubmit = async (email: any, password: any) => {
    try {
      setShowLoading(true);

      const user = await login(email, password);

      dispatch(loggedIn(user));

      history.replace(urls.APP_HOME);

      setShowLoading(false);
    } catch (e: any) {
      console.error(e);
      setShowLoading(false);
      setFormErrors(e);
    }
  }

  return (
    <IonPage>
      <RemotePage __id="login" showLoading={showLoading} closeLoading={closeLoading}
        submit={handleSubmit} formRef={formRef} goTo={goTo} />
    </IonPage>
  );
};

export default Login;
