import type { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Routes from "@/types/Routes";
import { LanguageCodeToName, LanguageNameToCode } from "@/types/Languages";
import Button from "@/components/Button";

const LanguageSelector: FC = () => {
  const { locales } = useRouter();

  const formatLocale = (locale: string) => {
    switch (locale.toUpperCase()) {
      case LanguageNameToCode.English:
        return LanguageCodeToName.EN;
      case LanguageNameToCode.Irish:
        return LanguageCodeToName.IE;
      default:
        return locale;
    }
  };

  return (
    <div className="my-6 flex flex-col lg:flex-row lg:justify-evenly">
      {locales?.map((locale) => (
        <Link key={locale} href={Routes.Home} locale={locale}>
          <div className="my-2">
            <Button>{formatLocale(locale)}</Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LanguageSelector;
