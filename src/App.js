import {
  Route,
  Switch,
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import routes from '@/routes';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';
import Header from '@/components/Header';
import store from '@/store';

const generatedRoutes = generateRoutes();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Content />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

function Content() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Switch location={location} key={location.key}>
        {generatedRoutes}
      </Switch>
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
