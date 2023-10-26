import AppItem from "../app-item";
import CardButton from "@/shared/components/buttons/card-button";
import GridCard from "@/shared/components/layout/grid-card";
import Link from "next/link";
import MobileIcon from "@/assets/icons/mobile";

export const mobileApps = [
  {
    title: "Radio Mobile",
    description:
      "A radio app to listen or add any radio stations, offering features like search, favorites, sleep timer, song recognition.",
    image: "/works/radioclub/logo.jpg",
    appstore: "https://apps.apple.com/app/radio-mobile/id1634077380",
    playstore: "https://play.google.com/store/apps/details?id=vip.radioclub",
    path: "/work/radio-mobile",
    tags: [
      "Flutter",
      "Firebase",
      "Node.js",
      "Docker",
      "AdMob",
      "RevenueCat",
      "Localization",
    ],
    hasBorder: true,
  },
];

function MobileAppsList() {
  return (
    <GridCard
      footer={
        <div className="w-full">
          <Link href="/work/#mobile" className="mt-1">
            <CardButton
              title="VIEW ALL"
              className="hover:animate-scale float-right"
            />
          </Link>
        </div>
      }
      icon={<MobileIcon />}
      title="MOBILE"
    >
      {mobileApps.map((card) => (
        <AppItem key={card.title} card={card} />
      ))}
    </GridCard>
  );
}

export default MobileAppsList;
