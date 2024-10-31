import { useTheme } from "@/hooks/use-theme";
import ReactGithubCalendar, { ThemeInput } from "react-github-calendar";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
export function GithubCalendar() {
  const { colors } = useTheme();
  const theme: ThemeInput = {
    dark: [colors.indigo[300], colors.indigo[700]],
    light: [colors.indigo[300], colors.indigo[700]],
  };
  return (
    <ScrollArea className="w-[360px] md:[400px] lg:w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        <ReactGithubCalendar
          username="mnm89"
          blockSize={15}
          blockMargin={5}
          theme={theme}
          fontSize={16}
        />
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
