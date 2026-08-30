import { cn } from "@workspace/ui/lib/utils";

export default function Page() {
    return (
        <div className="mx-auto w-full">

            <section className="relative flex min-h-screen flex-col items-center justify-center gap-5">
                <h1
                    className={cn(
                        "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl",
                        "text-shadow-[0_0px_50px_theme(--color-foreground/.2)]"
                    )}
                >
                    Templates
                </h1>


            </section>


        </div>
    );
}