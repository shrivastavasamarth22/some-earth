import {
  githubIcon,
  linkedinIcon,
  xIcon,
  instagramIcon
} from "@/assets/icons/all-social";

const linksCards = [
  {
    title: "Github",
    href: "https://github.com/shrivastavasamarth22",
    className: "dark:bg-white p-2",
    icon: githubIcon,
  },
  {
    title: "LinkedIn",
    className: "!bg-[#0A66C2] p-4",
    href: "https://www.linkedin.com/in/samarth-shrivastava-175399135/",
    icon: linkedinIcon,
  },
  {
    title: "X",
    className: "p-4 bg-dark dark:bg-white",
    href: "https://x.com/oyesamarth",
    icon: xIcon,
  },
  {
	title: "Instagram",
	className: "dark:bg-white overflow-hidden",
	href: "https://www.instagram.com/_samcor3/",
	icon: instagramIcon,
  },
];

export default linksCards;
