"use client";

import { useTheme } from "@/hooks/use-theme";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const ProgressBarProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color={theme.colors.primary.DEFAULT}
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
