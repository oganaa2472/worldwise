import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/product';
import HomePage from './pages/homepage';
import Pricing from './pages/pricing';
import NotFound from './pages/not_found';
import AppLayout from './pages/app_layout';
import Login from './pages/Login';
const App: FC = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/app" element={<AppLayout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
