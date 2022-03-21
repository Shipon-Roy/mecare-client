import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Depertment from './components/Depertment/Depertment';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Registar/Register';
import AuthProvider from './context/AuthProvider';
import AddReview from './components/AddReview/AddReview';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/departments">
            <Depertment></Depertment>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
