import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route exact path="/pagina-inicial/*" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
