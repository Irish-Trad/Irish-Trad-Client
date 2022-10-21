import type { FC } from "react";
import Layout from "layouts/Layout";
import { getStaticPaths, makeStaticProps } from "lib/getStatic";
import { useTranslation } from "next-i18next";

export const terms = [
  {
    term: "arpeggio",
    description: "arpeggioDesc",
  },
  {
    term: "bending",
    description: "bendingDesc",
  },
  {
    term: "bpm",
    description: "bpmDesc",
  },
  {
    term: "cbom",
    description: "cbomDesc",
  },
  {
    term: "chord",
    description: "chordDesc",
  },
  {
    term: "gdae",
    description: "gdaeDesc",
  },
  {
    term: "gdad",
    description: "gdadDesc",
  },
  {
    term: "interval",
    description: "intervalDesc",
  },
  {
    term: "octaveMandolin",
    description: "octaveMandolinDesc",
  },
  {
    term: "octaveMandola",
    description: "octaveMandolaDesc",
  },
  {
    term: "soundingRange",
    description: "soundingRangeDesc",
  },
  {
    term: "stringGauge",
    description: "stringGaugeDesc",
  },
  {
    term: "tempo",
    description: "tempoDesc",
  },
  {
    term: "treble",
    description: "trebleDesc",
  },
  {
    term: "trill",
    description: "trillDesc",
  },
  {
    term: "vibrato",
    description: "vibratoDesc",
  },
];

const Terminology: FC = () => {
  const { t } = useTranslation(["terminology"]);

  return (
    <Layout title={t("head.title")} metaDescription={t("head.meta")}>
      {terms.map(({ term, description }) => (
        <p key={term}>
          <b>{t(term)}: </b>
          {t(description)}
        </p>
      ))}
    </Layout>
  );
};

export default Terminology;

const getStaticProps = makeStaticProps(["terminology", "menu"]);
export { getStaticPaths, getStaticProps };
