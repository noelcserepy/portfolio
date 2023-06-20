import { type NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import IsMobileContext from "components/contexts/isMobileContext";
import Desktop from "components/desktop/Desktop";
import Mobile from "components/mobile/Mobile";

const Home: NextPage = () => {
  const { isMobile } = useContext(IsMobileContext);

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
};

export default Home;
