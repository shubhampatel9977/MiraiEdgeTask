import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from './layouts/MainLayout';
import mainRoutes from './routes/MainRoutes';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {[...mainRoutes]}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
