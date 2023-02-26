import Navbar from "@/components/Navbar";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="text-white bg-gray-800 min-h-screen w-full flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
