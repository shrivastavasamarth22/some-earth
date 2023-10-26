import AppItem from "../app-item";
import CardButton from "@/shared/components/buttons/card-button";
import DesktopIcon from "@/assets/icons/desktop";
import GridCard from "@/shared/components/layout/grid-card";
import Link from "next/link";

export const webApps = [
  {
    title: "Jotion",
    description:
      "A better note taking app.",
    image: "/works/jotion/logo-dark.svg",
    link: "https://jotion-notes.vercel.app",
    path: "/work/jotion",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "Node.js",
      "ConvexDB",
      "Clerk",
    ],
    hasBorder: true,
  },
  {
    title: "Spotify Clone",
    description:
      "A REALLY good clone of spotify.",
    image: "/works/spotify/spotify-logo.svg",
    link: "https://github.com/shrivastavasamarth22/spotify-clone",
    path: "/work/spotify-clone",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "React",
      "Clerk",
      "Stripe"
    ],
    hasBorder: true,
  },
  {
    title: "FreshCart",
    description:
      "A complete grocery app with a backend and admin dashboard.",
    image: "/works/freshcart/freshcart-logo.png",
    link: "https://github.com/shrivastavasamarth22/grocery-app-project",
    path: "/work/freshcart",
    tags: [
      "Bootstrap",
      "Python",
      "Flask",
      "SQLAlchemy",
      "Jinja2",
    ],
  },
];

function WebAppsList() {
  return (
    <GridCard
      footer={
        <div className="w-full">
          <Link href="/work/#web" className="mt-1">
            <CardButton
              title="VIEW ALL"
              className="hover:animate-scale float-right"
            />
          </Link>
        </div>
      }
      icon={<DesktopIcon />}
      title="WEB"
    >
      {webApps.map((card) => (
        <AppItem key={card.title} card={card} />
      ))}
    </GridCard>
  );
}

export default WebAppsList;
