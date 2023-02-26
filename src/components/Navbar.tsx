import List from "@/components/icons/List";
import Routes from "@/types/Routes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import type { FC } from "react";
import Cross from "@/components/icons/Cross";

const Links = [
  {
    url: Routes.Home,
    text: "Home",
  },

  {
    url: Routes.Chords,
    text: "Chords",
  },
  {
    url: Routes.ClefToTab,
    text: "Clef to Tab",
  },
  {
    url: Routes.Community,
    text: "Community",
  },
  {
    url: Routes.Contact,
    text: "Contact",
  },
  {
    url: Routes.Newsletter,
    text: "Newsletter",
  },
  {
    url: Routes.Tablature,
    text: "Tablature",
  },
  {
    url: Routes.Terminology,
    text: "Terminology",
  },
  {
    url: Routes.Lessons,
    text: "Lessons",
  },
];

const Navbar: FC = () => {
  const { locale } = useRouter();

  const [showNavigationMenu, setShowNavigationMenu] = useState(false);

  const handleIconClick = () => {
    setShowNavigationMenu((prevShowValue) => !prevShowValue);
  };

  return (
    <>
      <nav className="flex align-items justify-between bg-gray-900 p-2">
        <Link href={Routes.Home} locale={locale} className="flex items-center">
          <h1 className="text-white font-bold">Irish-Trad.net</h1>
        </Link>
        <List fill="white" onClick={handleIconClick} />
      </nav>
      {showNavigationMenu && (
        <div className="absolute top-0 left-0 bg-gray-900 h-screen w-screen">
          <div className="p-2 flex justify-end">
            <Cross fill="white" onClick={handleIconClick} />
          </div>

          <div className="flex flex-col items-center">
            {Links.map((link) => (
              <Link
                href={link.url}
                locale={locale}
                key={link.text}
                className="m-4 hover:underline hover:underline-offset-8"
                onClick={handleIconClick}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
