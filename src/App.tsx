
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  
  return (
      <Routes>
        <Route path="/ImaginariumRPG" element={<MainPage/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
  );
}

export default App;
