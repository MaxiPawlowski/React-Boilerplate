import React from 'react';
import Landing from 'screens/Landing';
import store from 'store';
import theme from 'utils/theme'
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'react-jss'
import { history } from 'utils/history'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/test" render={() => (<span>test</span>)} />
        </Switch>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
