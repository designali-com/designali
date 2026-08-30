
import { Button } from "@workspace/ui/components/button";
import { Logo } from "@workspace/ui/designali/logo";
import Link from "next/link";

export function HeroSection() {
	return (
		<section className="w-full relative h-screen flex-col items-center justify-center flex mx-auto">
			<div className="border-t absolute top-10 border-dotted w-full  " />
			<div className="border-b absolute bottom-10 border-dotted w-full " />
			<div className="border-r absolute right-10 border-dotted   h-full" />
			<div className="border-l absolute left-10 border-dotted   h-full" />
			<div className="w-full flex flex-col items-center justify-center h-full">
				<div className="relative text-center flex flex-col items-center justify-center gap-5 p-20">
					<Logo className="size-20" />
					<h1 className="text-5xl font-bold">
						design se code tak
					</h1>
					<p className="text-sm max-w-xl text-muted-foreground">
						Where thoughtful design meets production-ready code.
						I design and build digital experiences that look great, feel intuitive, and work beautifully.
					</p> 
					<Button render={<Link href={""} />} >
						Book a Call
					</Button> 
				</div> 
			</div> 
		</section>
	);
}
