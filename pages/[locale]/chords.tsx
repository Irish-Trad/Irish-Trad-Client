import { FC } from "react";
import Layout from "layouts/Layout";
import { getStaticPaths, makeStaticProps } from "lib/getStatic";
import { useTranslation } from "next-i18next";

const chordButtons = [
  {
    href: "#MajorChords",
    labelLocaleKey: "majorChords",
  },
  {
    href: "#MinorChords",
    labelLocaleKey: "minorChords",
  },
  {
    href: "#Major7thChords",
    labelLocaleKey: "major7thChords",
  },
  {
    href: "#Minor7thChords",
    labelLocaleKey: "minor7thChords",
  },
  {
    href: "#Dominant7thChords",
    labelLocaleKey: "dominant7thChords",
  },
];

const Chords: FC = () => {
  const { t } = useTranslation(["chords"]);

  return (
    <Layout title={t("head.title")} metaDescription={t("head.meta")}>
      <div className="flex justify-center">
        {chordButtons.map((item) => (
          <a
            key={item.labelLocaleKey}
            className="mx-4 my-4"
            href={`${item.href}`}
          >
            <button>{item.labelLocaleKey}</button>
          </a>
        ))}
      </div>
      <p>{t("chordDiagramsFound")}</p>
      <p>{t("theoreticalDescription")}</p>
      <p>{t("patternsShowcased")}</p>
      <p>{t("majorChords")}</p>
      <p>{t("majorChordConsistsOfThreeNotes")}</p>
      <p>
        <b>{t("cMajorScale")}</b>
      </p>
      <p>
        <b>{t("eMajorScale")}</b>
      </p>
      <p>{t("extractingThreeNotesRequired")}</p>
      <p>
        <b>{t("majorChordFormula")}</b>
      </p>
      <p>
        <b>{t("majorChordFormulaIntervals")}</b>
      </p>
      <p>{t("resultIsCMajorAndEMajor")}</p>
      <p>
        <b>{t("cMajorChord")}</b>
      </p>
      <p>
        <b>{t("eMajorChord")}</b>
      </p>
      <div>
        <a
          href="assets/high-quality/GDAE_Chords/GDAE-Major-A4.pdf"
          target="_blank"
        >
          <img
            id="MajorChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Major-A4.jpg"
            alt={t("majorChordsInGDAETuning")}
          />
        </a>
        <a
          href="assets/high-quality/GDAD_Chords/GDAD-Major-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Major-A4.jpg"
            alt={t("majorChordsInGDADTuning")}
          />
        </a>
      </div>
      <p>{t("minorChords")}</p>
      <p>{t("basicMinorChordConsistsOfThreeNotes")}</p>
      <p>
        <b>{t("cMinorScale")}</b>
      </p>
      <p>
        <b>{t("eMinorScale")}</b>
      </p>
      <p>{t("extractingThreeNotesRequired")}</p>
      <p>
        <b>{t("minorChordFormula")}</b>
      </p>
      <p>
        <b>{t("minorChordFormulaIntervals")}</b>
      </p>
      <p>{t("resultIsCMinorAndEMinor")}</p>
      <p>
        <b>{t("cMinorChord")}</b>
      </p>
      <p>
        <b>{t("eMinorChord")}</b>
      </p>
      <div>
        <a
          href="assets/high-quality/GDAE_Chords/GDAE-Minor-A4.pdf"
          target="_blank"
        >
          <img
            id="MinorChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Minor-A4.jpg"
            alt={t("minorChordsInGDAETuning")}
          />
        </a>
        <a
          href="assets/high-quality/GDAD_Chords/GDAD-Minor-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Minor-A4.jpg"
            alt={t("minorChordsInGDADTuning")}
          />
        </a>
      </div>
      <p>{t("major7thChords")}</p>
      <p>{t("major7thChordsAreExtendedChords")}</p>
      <p>
        <b>{t("cMajorScale")}</b>
      </p>
      <p>
        <b>{t("eMajorScale")}</b>
      </p>
      <p>{t("extractingFourNotesRequired")}</p>
      <p>
        <b>{t("major7thChordFormula")}</b>
      </p>
      <p>
        <b>{t("major7thChordFormulaIntervals")}</b>
      </p>
      <p>{t("resultIsCMajor7thAndEMajor7th")}</p>
      <p>
        <b>{t("cMajor7thChord")}</b>
      </p>
      <p>
        <b>{t("eMajor7thChord")}</b>
      </p>
      <div>
        <a
          href="assets/high-quality/GDAE_Chords/GDAE-Major7th-A4.pdf"
          target="_blank"
        >
          <img
            id="Major7thChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Major7th-A4.jpg"
            alt={t("major7thChordsInGDAETuning")}
          />
        </a>
        <a
          href="assets/high-quality/GDAD_Chords/GDAD-Major7th-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Major7th-A4.jpg"
            alt={t("major7thChordsInGDADTuning")}
          />
        </a>
      </div>
      <p>{t("minor7thChords")}</p>
      <p>{t("minor7thChordsAreExtendedChords")}</p>
      <p>
        <b>{t("cMinorScale")}</b>
      </p>
      <p>
        <b>{t("eMinorScale")}</b>
      </p>
      <p>{t("extractingFourNotesRequired")}</p>
      <p>
        <b>{t("minor7thChordFormula")}</b>
      </p>
      <p>
        <b>{t("minor7thChordFormulaIntervals")}</b>
      </p>
      <p>{t("resultIsCMinor7thAndEMinor7th")}</p>
      <p>
        <b>{t("cMinor7thChord")}</b>
      </p>
      <p>
        <b>{t("eMinor7thChord")}</b>
      </p>
      <div>
        <a
          href="assets/high-quality/GDAE_Chords/GDAE-Minor7th-A4.pdf"
          target="_blank"
        >
          <img
            id="Minor7thChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Minor7th-A4.jpg"
            alt={t("minor7thChordsInGDAETuning")}
          />
        </a>
        <a
          href="assets/high-quality/GDAD_Chords/GDAD-Minor7th-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Minor7th-A4.jpg"
            alt={t("minor7thChordsInGDADTuning")}
          />
        </a>
      </div>
      <p>{t("dominant7thChords")}</p>
      <p>{t("dominant7thChordsAreExtendedChords")}</p>
      <p>
        <b>{t("cMajorScale")}</b>
      </p>
      <p>
        <b>{t("eMajorScale")}</b>
      </p>
      <p>
        <b>{t("cMinorScale")}</b>
      </p>
      <p>
        <b>{t("eMinorScale")}</b>
      </p>
      <p>{t("extractingFourNotesRequired")}</p>
      <p>
        <b>{t("dominant7thChordFormula")}</b>
      </p>
      <p>
        <b>{t("dominant7thChordFormulaIntervals")}</b>
      </p>
      <p>{t("resultIsCDominant7thAndEDominant7th")}</p>
      <p>
        <b>{t("cDominant7thChord")}</b>
      </p>
      <p>
        <b>{t("eDominant7thChord")}</b>
      </p>
      <div>
        <a
          href="assets/high-quality/GDAE_Chords/GDAE-Dominant7th-A4.pdf"
          target="_blank"
        >
          <img
            id="Dominant7thChords"
            src="assets/low-quality/GDAE_Chords/GDAE-Dominant7th-A4.jpg"
            alt={t("dominant7thChordsInGDAETuning")}
          />
        </a>
        <a
          href="assets/high-quality/GDAD_Chords/GDAD-Dominant7th-A4.pdf"
          target="_blank"
        >
          <img
            src="assets/low-quality/GDAD_Chords/GDAD-Dominant7th-A4.jpg"
            alt={t("dominant7thChordsInGDADTuning")}
          />
        </a>
      </div>
    </Layout>
  );
};

export default Chords;

const getStaticProps = makeStaticProps(["chords", "menu"]);
export { getStaticPaths, getStaticProps };
