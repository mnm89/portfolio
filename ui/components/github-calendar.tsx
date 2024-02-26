import ReactGithubCalendar, { ThemeInput } from "react-github-calendar";
export function GithubCalendar() {
  const theme: ThemeInput = {
    dark: ["#581C87", "#D946EF"],
    light: ["#581C87", "#D946EF"],
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
