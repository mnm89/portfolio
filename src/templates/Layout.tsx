import { PALETTE } from "../constants";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        background: `radial-gradient(circle,${PALETTE.primary} 50%,${PALETTE.primaryLight} 100%)`,
      }}
      className="pr-6 pl-6 pt-20 min-h-screen w-screen text-white"
    >
      {children}
    </main>
  );
};
