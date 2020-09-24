import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Search from './ui/pages/search';
import Result from './ui/pages/results';
import Single from './ui/pages/single';
import createStore, { history } from './store/createStore';
import theme from './theme';
import routes from './ui/routes';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Container maxWidth="lg">
            <Switch>
              <Route path={routes.results} component={Result} />
              <Route path={routes.single} component={Single} />
              <Route exact path={routes.search} component={Search} />
            </Switch>
          </Container>
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
