import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";
import IsMobileContext from "components/contexts/isMobileContext";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useRouter } from "next/router";
import SEO from "components/SEO/SEO";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [isMobile, setIsMobile] = useMediaQuery("(max-width: 768px)");

  const router = useRouter();
  const url = `https://noelcserepy.com${router.route}`;

  return (
    <IsMobileContext.Provider value={{ isMobile, setIsMobile }}>
      <SEO url={url} />
      <main
        className={`${bebas.variable} ${montserrat.variable}  font-text text-sm md:text-base`}
      >
        <style jsx global>{`
          html,
          body {
            overflow: hidden;
          }
        `}</style>
        <Component {...pageProps} />;
      </main>
    </IsMobileContext.Provider>
  );
};

export default MyApp;
