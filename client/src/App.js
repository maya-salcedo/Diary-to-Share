import HomeScreen from './screens/HomeScreen';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './elements/GlobalStyle';
import DiaryScreen from './screens/DiaryScreen';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header></Header>
      <main>
        <Route path="/diary" component={DiaryScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
