import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { t: translate } = useTranslation("home");

  return (
    <div className="m-4">
      <h1 className="text-center my-2 text-5xl font-bold">Irish-Trad.net</h1>

      <LanguageSelector />

      <p className="mt-2">{translate("p1")}</p>
      <p className="mt-2">{translate("p2")}</p>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
