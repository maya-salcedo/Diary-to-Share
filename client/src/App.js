import HomeScreen from './screens/HomeScreen';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './elements/GlobalStyle';
import DiaryScreen from './screens/DiaryScreen';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header></Header>
      <main>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/signup" component={SignupScreen}></Route>
        <Route path="/diary" component={DiaryScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
