import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";
export function useTheme() {
  const { theme } = resolveConfig(tailwindConfig);

  return theme;
}
