import ReactGithubCalendar, { ThemeInput } from "react-github-calendar";
export function GithubCalendar() {
  const theme: ThemeInput = {
    dark: ["#581C87", "#D946EF"],
    //light: ["#E0E7FF", "#6366F1"],
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
