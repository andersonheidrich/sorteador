import { Route, Routes } from "react-router-dom";
import Main from "./Site/Main";
import American from "./Site/Main/Formats/American";
import Doubles from "./Site/Main/Formats/Doubles";
import Single from "./Site/Main/Formats/Single";
import AmericanGroups from "./Site/Main/Formats/American/AmericanGroups";
import DoublesGroups from "./Site/Main/Formats/Doubles/DoublesGroups";
import SingleGroups from "./Site/Main/Formats/Single/SingleGroups";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/americano" element={<American />} />
      <Route path="/americano/grupos" element={<AmericanGroups />} />
      <Route path="/duplas" element={<Doubles />} />
      <Route path="/duplas/grupos" element={<DoublesGroups />} />
      <Route path="/simples" element={<Single />} />
      <Route path="/simples/grupos" element={<SingleGroups />} />
    </Routes>
  );
};

export default Home;
