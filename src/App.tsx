import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/Login';
import { Spaces } from './pages/Spaces';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Rotas protegidas */}
          <Route element={<PrivateRoute />}>
            <Route path="/spaces" element={<Spaces />} />
          </Route>

          {/* Redireciona raiz para /spaces (ou /login se não autenticado) */}
          <Route path="*" element={<Navigate to="/spaces" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}