import { useAppSelector } from './hook';
import { AlertDialog } from './components/AlertDialog/AlertDialog';
import { AppRoutes } from './routes';

function App() {
  const { isOpen } = useAppSelector((state) => state.modal);

  return (
    <>
      {isOpen && <AlertDialog />} <AppRoutes />
    </>
  );
}

export default App;
