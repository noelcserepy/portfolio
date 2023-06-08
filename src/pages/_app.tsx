import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`${bebas.variable} ${montserrat.variable} overflow-hidden font-sans`}
    >
      <Component {...pageProps} />;
    </main>
  );
};

export default MyApp;
