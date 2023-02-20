import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './componets/Header/Header';
import Nav from './componets/Nav/Nav';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';

const App = (props) => (
  <>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route  path="/profile" element={<Profile />} />
          <Route  path="/dialogs" element={<Dialogs />} />
          <Route  path="/news" element={<News />} />
          <Route  path="/music" element={<Music />} />
          <Route  path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  </>
);

export default App;
