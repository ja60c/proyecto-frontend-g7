import { AuthProvider } from './contexts/authContext';
import Signup from './components/Singup';

function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}

export default App;