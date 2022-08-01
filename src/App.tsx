import { Redirect, Route } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';

import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { home, informationCircle, person, search } from "ionicons/icons";

import { AppContextProvider } from "./State";

import urls from "./urls";

import Tabs from "./Tabs";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";

import Audio from "./components/Audio";
import TrackPlayer from "./components/TrackPlayer";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => {
  return (
    <AppContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonPage>
            <IonRouterOutlet>
              <Route path={urls.LOGIN} component={Login} exact={true} />
              <Route path={urls.SIGNUP} component={Signup} exact={true} />
              <Route
                path={urls.RESET_PASSWORD}
                component={ResetPassword}
                exact={true}
              />
              <Route
                exact={true}
                path="/"
                render={() => <Redirect to={urls.APP_HOME} />}
              />
            </IonRouterOutlet>
            <Route path="/app" component={Tabs} />
            <Audio />
            <TrackPlayer />
          </IonPage>
        </IonReactRouter>
      </IonApp>
    </AppContextProvider>
  );
};

export default App;
