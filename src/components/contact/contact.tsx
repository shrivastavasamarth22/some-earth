"use client";

import CardTitle from "@/shared/components/titles/card-title";
import Link from "next/link";
import LinksGridCard from "../cards/links/links-grid";
import MailIcon from "@/assets/icons/mail";
import cardStyle from "@/shared/styles/card";

export default function Contact() {
    return (
        <>
            <div className="flex flex-col">
                <div onSubmit={() => {}} className={cardStyle}>
                    <CardTitle title="CONTACT" icon={<MailIcon />} />
                    <p className="text-md mb-1 mt-7">My Email:</p>
                    <h2 className="text-lg md:text-2xl font-bold">
                        shrivastavasamarth22@gmail.com
                    </h2>
                </div>
                <div className="py-3" />
                <LinksGridCard />
            </div>
        </>
    );
}
