import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import {
  HiHome,
  HiUserCircle,
  HiCodeBracketSquare,
  HiDocument,
} from "react-icons/hi2";
import { GrContact } from "react-icons/gr";

import {
  SiJavascript,
  SiSailsdotjs,
  SiMoleculer,
  SiArtifacthub,
  SiTypescript,
  SiSymfony,
  SiSpringboot,
  SiDotnet,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiCsharp,
  SiNodedotjs,
  SiAndroid,
  SiFlutter,
  SiJest,
  SiMocha,
  SiElectron,
  SiRabbitmq,
  SiApachekafka,
  SiDocker,
  SiGit,
  SiVisualstudiocode,
  SiSupabase,
  SiFirebase,
  SiElasticsearch,
  SiKibana,
  SiMeilisearch,
  SiAmazonec2,
  SiAmazonroute53,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiAndroidstudio,
  SiTermius,
  SiGitkraken,
  SiXcode,
  SiJira,
  SiFigma,
} from "react-icons/si";
import { DiYii, DiJava, DiPhp } from "react-icons/di";
export const navigation = [
  {
    label: "Home",
    icon: HiHome,
    path: "/",
  },
  {
    label: "About",
    icon: HiUserCircle,
    path: "/about",
  },
  {
    label: "Projects",
    icon: HiCodeBracketSquare,
    path: "/projects",
  },
  {
    label: "Resume",
    icon: HiDocument,
    path: "/resume",
  },
  {
    label: "Contact",
    icon: GrContact,
    path: "/contact",
  },
];
export const skills = [
  {
    label: "Javascript",
    icon: SiJavascript,
  },
  {
    label: "CSS 3",
    icon: SiCss3,
  },
  {
    label: "CSS Tailwind",
    icon: SiTailwindcss,
  },
  {
    label: "CSS bootstrap",
    icon: SiBootstrap,
  },
  {
    label: "Html 5",
    icon: SiHtml5,
  },
  {
    label: "Typescript",
    icon: SiTypescript,
  },
  {
    label: "Node js",
    icon: SiNodedotjs,
  },
  {
    label: "Node express.js",
    icon: SiExpress,
  },
  { label: "Node Sails.js", icon: SiSailsdotjs },
  { label: "Node Moleculer.js", icon: SiMoleculer },
  { label: "Node Medusa.js", icon: SiArtifacthub },
  {
    label: "Node Nest.js",
    icon: SiNestjs,
  },
  {
    label: "Next js",
    icon: SiNextdotjs,
  },
  {
    label: "React js",
    icon: SiReact,
  },
  {
    label: "Angular",
    icon: SiAngular,
  },

  {
    label: "PHP",
    icon: DiPhp,
  },
  {
    label: "PHP Symfony",
    icon: SiSymfony,
  },
  {
    label: "PHP Yii",
    icon: DiYii,
  },
  {
    label: "Flutter",
    icon: SiFlutter,
  },
  {
    label: "Java",
    icon: DiJava,
  },
  {
    label: "Java Android",
    icon: SiAndroid,
  },
  {
    label: "Java Springboot",
    icon: SiSpringboot,
  },
  {
    label: "C#",
    icon: SiCsharp,
  },
  {
    label: "C# Dotnet",
    icon: SiDotnet,
  },
  { label: "Postgresql", icon: SiPostgresql },
  { label: "Mongodb", icon: SiMongodb },
  { label: "Mysql", icon: SiMysql },
  { label: "Electron", icon: SiElectron },
  { label: "Jest", icon: SiJest },
  { label: "Mocha", icon: SiMocha },
];
export const tools = [
  {
    label: "VS Code",
    icon: SiVisualstudiocode,
  },
  {
    label: "Docker",
    icon: SiDocker,
  },
  {
    label: "Git",
    icon: SiGit,
  },
  {
    label: "Supabase",
    icon: SiSupabase,
  },
  {
    label: "Firebase",
    icon: SiFirebase,
  },
  {
    label: "Rabbitmq",
    icon: SiRabbitmq,
  },
  {
    label: "Apache Kafka",
    icon: SiApachekafka,
  },
  {
    label: "Elasticsearch",
    icon: SiElasticsearch,
  },
  {
    label: "Meilisearch",
    icon: SiMeilisearch,
  },
  {
    label: "Kibana",
    icon: SiKibana,
  },
  {
    label: "AWS ec2",
    icon: SiAmazonec2,
  },
  {
    label: "AWS route53",
    icon: SiAmazonroute53,
  },
  {
    label: "Vercel",
    icon: SiVercel,
  },
  {
    label: "Netlify",
    icon: SiNetlify,
  },
  {
    label: "Postman",
    icon: SiPostman,
  },
  {
    label: "Android Studio",
    icon: SiAndroidstudio,
  },
  {
    label: "Termius",
    icon: SiTermius,
  },
  { label: "Gitkraken", icon: SiGitkraken },
  { label: "Xcode", icon: SiXcode },
  { label: "Jira", icon: SiJira },
  { label: "Figma", icon: SiFigma },
];

export function debounce(fn: () => void, ms: number) {
  let timer: NodeJS.Timeout | null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      // @ts-ignore
      fn.apply(this, arguments);
    }, ms);
  };
}

export function formatDate(date: Date) {
  const year = `${date.getFullYear()}`;
  const month =
    date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;

  return `${year} ${month}`;
}

export function getScreenBreakpoints(): {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
} {
  const fullConfig = resolveConfig(tailwindConfig);
  const result = {
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
  };
  return Object.keys(result).reduce((acc: any, curr: string) => {
    acc[curr] = Number.parseInt(
      fullConfig.theme["screens"][curr].replace("px", ""),
      10
    );
    return acc;
  }, {});
}
