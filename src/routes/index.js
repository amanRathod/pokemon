import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import * as ROUTES from '../constants/routes';
import Theme from '../constants/theme';
import ThemeContext from '../util/context/theme';
import RenderLoader from '../util/objects/loader';
import ErrorFallback from '../components/public/error_boundary';

const PublicRoute = lazy(() => import('./public-route'));
const PrivateRoute = lazy(() => import('./private-route'));

const Home = lazy(() => import('../view/private/home'));
const Detail = lazy(() => import('../pages/detail'));
const Favourite = lazy(() => import('../pages/favourite'));
const Login = lazy(() => import('../view/public/login'));
const Signup = lazy(() => import('../view/public/register'));
const ForgotPassword = lazy(() => import('../view/public/forgot-password'));
const ResetPassword = lazy(() => import('../view/public/set-password'));

function App() {
  const { theme, setTheme } = Theme();
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={RenderLoader()}>
            <Switch>
              <PublicRoute path={ROUTES.LOGIN} component={Login} />
              <PublicRoute path={ROUTES.SIGNUP} component={Signup} />
              <PublicRoute path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
              <PublicRoute path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
              <PrivateRoute path={ROUTES.HOME} component={Home} exact />
              <PrivateRoute path={ROUTES.DETAIL} component={Detail} />
              <PrivateRoute path={ROUTES.FAVOURITE} component={Favourite} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
