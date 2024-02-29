import { ArrowLeftRight } from "lucide-react";
import Image from "next/image";
import cardStyle from "@/shared/styles/card";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function FullAboutCard() {
	return (
		<div className={cardStyle + "!py-12 !px-4"}>
			<div className="w-full flex flex-col items-center justify-center text-center gap-3">
				<EvervaultCard className="w-80 h-80">
					<Image
						className="rounded-full p-3"
						src="/me/hi-square.png"
						alt="Ayoub Kremcht"
						width={200}
						height={200}
					/>
				</EvervaultCard>
				<p className="text-xl font-bold py-4">
					<a className="opacity-70">Hi, I{"'"}m Samarth </a>👋
				</p>
				<p className="opacity-95 text-3xl font-bold">
					Passionate about building{" "}
					<a href="/work" className="underline underline-offset-4">
						Apps
					</a>
					.
				</p>
				<p className="text-lg text-neutral-500 py-3">
					a{" "}
					<a className="font-semibold text-dark dark:text-light/90">
						software developer & graphic designer
					</a>{" "}
					based in Bhopal{" "}
					{<ArrowLeftRight size={16} className="inline" />} Chennai.
				</p>
				<TextGenerateEffect
					words="Currently interested on developing quality applications as solutions that effectively solve problems, rather than just providing solutions."
					className="text-[17px] text-neutral-500 leading-relaxed" 
				/>
					
			</div>
		</div>
	);
}
