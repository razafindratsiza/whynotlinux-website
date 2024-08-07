import "bootstrap/dist/css/bootstrap.min.css";
import Comptetion from "./page/Comptetion";
import Conferences from "./page/Conferences";
import Stande from "./page/Stande";
import Statistiques from "./page/Statistiques";
import Home from "./scenes/Home";
import "./styles/App.css";
import { useState } from "react";

import CountDownDay from "./scenes/CountDownDay";
import OrganizersPartners from "./scenes/OrganizersPartners";

import Footer from "./scenes/Footer";
import GetTicket from "./scenes/GetTicket";
import Photos from "./scenes/Photos";
import Questions from "./scenes/Questions";
import About from "./scenes/About";

const App = () => {
  const WNL = new Date("July 20,2024").getTime();
  const [isPop, setIsPop] = useState(false);

  return (
    <>
      <Home setIsPop={setIsPop} isPop={isPop} />
      <div className="bg-background">
        <div className="mx-auto max-w-[1601px]">
          <CountDownDay WNL={WNL} />
          <OrganizersPartners />
          <About />
          <Conferences />
          <Stande />
          <Statistiques />
          <Comptetion />
          <Photos />
          <Questions />
        </div>
        <GetTicket setIsPop={setIsPop} isPop={isPop} />
        <Footer />
      </div>
    </>
  );
};

export default App;
