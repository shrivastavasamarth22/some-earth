import { Metadata } from "next";
import rootMetadata from "./root";
import { uniqueTags } from "@/components/cards/about/experiences";

const aboutTitle = "Samarth | About";
const aboutDescription = `Samarth Shrivastava, A software developer from Bhopal interested in building apps as solutions.`;

const aboutMetadata: Metadata = {
  ...rootMetadata,
  title: aboutTitle,
  description: aboutDescription,
  openGraph: {
    ...rootMetadata.openGraph,
    title: aboutTitle,
    description: aboutDescription,
  },
  twitter: {
    ...rootMetadata.twitter,
    title: aboutTitle,
    description: aboutDescription,
  },
  keywords: uniqueTags,
};

export default aboutMetadata;
