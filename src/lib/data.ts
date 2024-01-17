import aruarian_dance from "../public/aruarian.png";
import samurai_champloo from "../public/samurai_champloo.jpg";
import metaphorical from "../public/metaphorical.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  }
] as const;

export const projectsData = [
  {
    title: "Departure",
    description:
      "The music on the album was composed and produced by Nujabes and Fat Jon, included Shing02's opening theme 'BattleCry' and Minmi's ending theme 'Shiki no Uta', and was dominated by soft and low-tempo tracks.",
    tags: ["Nujabes", "Fat Jon"],
    imageUrl: aruarian_dance,
  },
  {
    title: "Impression",
    description:
      " All but one track were composed and produced by Fat Jon, Nujabes and Force of Nature. 'Who's Theme' was produced and composed by Minmi and Nujabes.",
    tags: ["Nujabes", "Force of Nature", "Fat Jon", "MINMI"],
    imageUrl: samurai_champloo,
  },
  {
    title: "Metaphorical Music",
    description:
      "Metaphorical Music is Nujabes' first solo album released in 2003. It offers a combination of hip hop and instrumental jazz, and features artists like Shing02, Substantial, Five Deez and Cise Starr",
    tags: ["Nujabes"],
    imageUrl: metaphorical,
  },
] as const;
