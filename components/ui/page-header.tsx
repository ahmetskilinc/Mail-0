import { NavUser } from "./nav-user";
import Image from "next/image";

export const PageHeader = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-[40] bg-background p-4">
      <div className="container relative mx-auto flex max-w-6xl items-center justify-between px-4">
        <Image src="/logo.png" alt="Mail0" height={40} width={40} />
        <div>
          <NavUser />
        </div>
      </div>
    </div>
  );
};
