import { Route, Routes } from "react-router-dom";
import { Drawing, LoginPage, Main } from "./Site";
import American from "./Site/Drawing/Formats/American";
import Doubles from "./Site/Drawing/Formats/Doubles";
import Single from "./Site/Drawing/Formats/Single";
import AmericanGroups from "./Site/Drawing/Formats/American/AmericanGroups";
import DoublesGroups from "./Site/Drawing/Formats/Doubles/DoublesGroups";
import SingleGroups from "./Site/Drawing/Formats/Single/SingleGroups";
import PrivateRoute from "../routes/PrivateRoute";

const Home = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main />
          // <PrivateRoute>
          // </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<LoginPage />} />
      <Route path="/sorteio" element={<Drawing />} />
      <Route path="/sorteio/americano" element={<American />} />
      <Route path="/sorteio/americano/grupos" element={<AmericanGroups />} />
      <Route path="/sorteio/duplas" element={<Doubles />} />
      <Route path="/sorteio/duplas/grupos" element={<DoublesGroups />} />
      <Route path="/sorteio/simples" element={<Single />} />
      <Route path="/sorteio/simples/grupos" element={<SingleGroups />} />
    </Routes>
  );
};

export default Home;
