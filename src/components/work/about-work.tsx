"use client";

import AppItem from "../cards/apps/app-item";
import ChevronLeftIcon from "@/assets/icons/chevron-left";
import Image from "next/image";
import NotFoundEntry from "@/app/not-found";
import cardStyle from "@/shared/styles/card";
import { useRouter } from "next/navigation";
import { webApps } from "../cards/apps/data/web-apps";

function AboutWork({ id }: { id: string }) {
    const findWork = [...webApps].find((work) => work.path === `/work/${id}`);
    const router = useRouter();
    if (!findWork) return <NotFoundEntry />;
    return (
        <div className={cardStyle}>
            <button
                onClick={() => router.back()}
                className="flex flex-row justify-start items-center gap-2 opacity-50 hover:opacity-100 hover:underline"
            >
                <div className="hover:animate-scale">
                    <ChevronLeftIcon className="w-6 h-6" />
                </div>
                <p className="text-sm">BACK</p>
            </button>
            <div className="h-7" />
            <AppItem card={findWork} hideLearnMore />
            <div className="h-3" />
            {findWork.screenshots && (
                <div className="w-full flex flex-row justify-center gap-x-2">
                    {findWork.screenshots.map((img, index) => (
                        <div
                            key={img}
                            className="h-96 w-48 rounded-2xl bg-neutral-500/10 border border-neutral-500/10"
                            style={{ position: "relative" }}
                        >
                          <Image 
                            src={img}
                            alt={`Screenshot ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                          />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AboutWork;
