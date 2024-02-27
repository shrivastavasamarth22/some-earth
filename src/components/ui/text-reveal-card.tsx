"use client";

import {useEffect, useRef, useState, memo} from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/utils/cn";

interface TextRevealCardProps {
	text: string;
	revealText: string;
	children?: React.ReactNode;
	className?: string;
}

export const TextRevealCard = ({
	text,
	revealText,
	children,
	className
}: TextRevealCardProps) => {
	const [widthPercentage, setWidthPercentage] = useState(0);
	const cardRef = useRef<HTMLDivElement | any>(null);
	const [left, setLeft] = useState(0);
	const [localWidth, setLocalWidth] = useState(0);
	const [isMouseOver, setIsMouseOver] = useState(false);

	useEffect(() => {
		if (cardRef.current) {
			const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
			setLeft(left);
			setLocalWidth(localWidth);
		}
	}, [])

	function mouseMoveHandler(event: any) {
		event.preventDefault();

		const { clientX } = event;
		if (cardRef.current) {
			const relativeX = clientX - left;
			setWidthPercentage((relativeX / localWidth) * 100);
		}
	}

	function mouseLeaveHandler() {
		setIsMouseOver(false);
		setWidthPercentage(0);
	}

	function mouseEnterHandler() {
		setIsMouseOver(true);
	}

	const rotateDeg = (widthPercentage - 50) * 0.1;
	
	return (
		<div
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			onMouseMove={mouseMoveHandler}
			ref={cardRef}
			className={cn(
					"bg-[#1d1c20] border border-white/[0.08] w-[40rem] rounded-lg p-8 relative overflow-hidden",
					className
				)}
		>
			{children}
			<div className="h-40 relative flex items-center overflow-hidden">
				<motion.div
					style={{ width: "100%" }}
					animate={
						isMouseOver
							? {
								opacity: widthPercentage > 0 ? 1 : 0,
								clipPath: `inset(0% ${100 - widthPercentage}% 0 0)`	
							}
							: { 
								clipPath: `inset(0% ${100 - widthPercentage}% 0 0)`, 
							}
					}
					transition={isMouseOver ? {duration: 0} : {duration: 0.4}}
					className="absolute bg=[#1d1c20] z-20 will-change-transform"
				>
					<p
						style={{
							textShadow: "4px 4px 15px rgba(0,0,0,0.5)"
						}}
						className="text-base sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from white to-neutral-300"
					>
						{revealText}
					</p>
				</motion.div>
			</div>
		</div>
	)

}


