import { useContext } from 'react';
import { AuthContext } from '../views/panel/context/AuthContext';

// Hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);

  // Si el contexto es undefined, lanzar un error o manejarlo
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }

  return context; // Aquí ya estás garantizando que el contexto no es undefined
};
