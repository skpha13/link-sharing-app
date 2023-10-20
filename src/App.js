import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Profile from "./routes/profile/profile.component";
import Links from "./routes/links/links.component";
import Preview from "./routes/preview/preview.component";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/links' element={<Links />} />
      <Route path='/preview' element={<Preview />} />
    </Routes>
  );
}

export default App;