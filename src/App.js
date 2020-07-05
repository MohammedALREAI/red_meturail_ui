import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import theme from "./Components/Ui/theme";
import Layout from './Layout/layout';
import LoadingPage from './Components/LoadingPage';

const simpleItem=()=><div> simple app</div>
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={LoadingPage} />
            <Route exact path="/services" component={() => <simpleItem />} />
            <Route exact path="/about" component={() => <simpleItem />} />
            <Route exact path="/revolution" component={() => <simpleItem />} />
            <Route exact path="/contact" component={() => <simpleItem />} />
            <Route exact path="/estimate" component={() => <simpleItem />} />
            <Route exact path="/websites" component={() => <simpleItem />} />
            <Route exact path="/mobileapps" component={() => <simpleItem />} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
