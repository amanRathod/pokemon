import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import * as ROUTES from '../constants/routes';
import RenderLoader from '../util/objects/loader';
import ErrorFallback from '../components/public/error_boundary';

const Home = lazy(() => import('../view/public/home'));
const Detail = lazy(() => import('../pages/detail'));

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={RenderLoader()}>
          <Switch>
            <Route path={ROUTES.DETAIL} component={Detail} />
            <Route path={ROUTES.HOME} component={Home} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
