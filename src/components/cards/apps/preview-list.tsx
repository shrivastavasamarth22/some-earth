import AppItem from "./app-item";
import CardButton from "@/shared/components/buttons/card-button";
import CardTitle from "@/shared/components/titles/card-title";
import DevicesIcon from "@/assets/icons/devices";
import Link from "next/link";
import cardStyle from "@/shared/styles/card";
import { mobileApps } from "./data/mobile-apps";
import { webApps } from "./data/web-apps";

function PreviewAppsList() {
  return (
    <div className={cardStyle}>
      <CardTitle icon={<DevicesIcon />} title="PROJECTS" />
      <div className="h-8" />
      <div className="flex flex-wrap content-center gap-7">
        {[...webApps.slice(0, 2)].map((card) => (
          <AppItem key={card.title} card={card} />
        ))}
      </div>
      <div className="h-5" />
      <div className="w-full">
        <Link href="/work">
          <CardButton
            title="VIEW ALL"
            className="hover:animate-scale float-right px-7"
          />
        </Link>
      </div>
    </div>
  );
}

export default PreviewAppsList;
