import { useTheme } from "@/hooks/use-theme";
import ReactGithubCalendar, { ThemeInput } from "react-github-calendar";
export function GithubCalendar() {
  const { colors } = useTheme();
  const theme: ThemeInput = {
    dark: [colors.indigo[300], colors.indigo[700]],
    light: [colors.indigo[300], colors.indigo[700]],
  };
  return (
    <ReactGithubCalendar
      username="mnm89"
      blockSize={15}
      blockMargin={5}
      theme={theme}
      fontSize={16}
    />
  );
}
