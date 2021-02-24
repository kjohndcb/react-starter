import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import routes from '@/routes';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';
import Header from '@/components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Route
            render={({ location }) => (
              <>
                <Header />
                <Switch location={location}>{generateRoutes()}</Switch>
              </>
            )}
          />
        </Router>
      </ThemeProvider>
    </>
  );
}

function generateRoutes() {
  return routes.map((route, index) => {
    const { path, component } = route;
    const Component = require(`@/pages/${component}/index`).default;
    return (
      <Route
        exact
        path={path}
        render={(props) => <Component {...props} {...route.props} />}
        key={`route-${index}`}
      />
    );
  });
}

export default App;
