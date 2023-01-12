import { useAppSelector } from './hooks/hook'
import { AppRoutes } from './routes'
// import { AlertDialog } from './components/AlertDialog/AlertDialog';
// import { AppRoutes } from './routes'

function App() {
  // const { isOpen } = useAppSelector((state) => state.modal)

  return (
    <>
      {/* {isOpen && <AlertDialog />}  */}
      <AppRoutes />
    </>
  )
}

export default App
