import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { TweetCard } from "@workspace/ui/common/tweet-card"
import { Masonary } from "./masonary"

const allTweets = [
  "https://x.com/learnframer/status/1986146849020125484",
  "https://x.com/stephenhaney/status/1966609181361729770",
  "https://x.com/xn1cklas/status/2027423354852954564",
  "https://x.com/opencutapp/status/2029297075716784521",
  "https://x.com/jakub_works/status/1958186156249485664",
  "https://x.com/CherubinV47534/status/1914771532100043078",
  "https://x.com/M8ker_com/status/1846950174641316122",
  "https://x.com/serafimcloud/status/1877383403001057439",
  "https://x.com/jakub_works/status/1958181359035261153",
  "https://x.com/learnframer/status/1994076861438284043",
  "https://x.com/xn1cklas/status/2027419258607587442",
  "https://x.com/learnframer/status/1986146837234102380",
  "https://x.com/M8ker_com/status/1846044133665739103",
  "https://x.com/21st_dev_old/status/1970231768851591435",
  "https://x.com/alibey_10/status/2021254834486378682",
  "https://x.com/21st_dev_old/status/1937752881844695397",
  "https://x.com/21st_dev_old/status/1959903753047359860",
  "https://x.com/21st_dev_old/status/1958001449113117054",
].map((t) => t.split("/").slice(-1)[0])

export function Testimonials() {
  return (
    <div className="relative h-full w-full border-t border-dotted">
      <div className="relative">
        <h1 className="relative left-1/2 z-0 w-screen -translate-x-1/2 py-6 text-center text-[20vw] leading-[0.6em] font-black tracking-tighter uppercase md:py-0 md:text-[14vw] md:leading-none">
          Wall <br className="block md:hidden" /> of Love
        </h1>

        <p className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 bg-background/50 px-20 py-1 text-center text-xs text-foreground backdrop-blur-md md:text-sm">
          Real words from the people who trusted designali with their ideas.
        </p>
      </div>

      <section className="relative z-10">
        <div className="p-2 lg:border-x">
          <div className="flex flex-wrap justify-center gap-2">
            <Masonary initialCount={9}>
              {allTweets.map((id) => (
                <div key={id} className="group relative block h-full w-full">
                  <TweetCard
                    apiUrl={id}
                    id={id}
                    className="bg-code h-full w-full overflow-hidden border bg-background/50 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-200 ease-in-out hover:shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center border opacity-0 backdrop-blur-sm transition-opacity duration-200 ease-in-out will-change-[opacity] group-hover:opacity-100">
                    <Link
                      href={`https://x.com/i/status/${id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-fit"
                    >
                      <Button
                        variant="default"
                        size="default"
                        className="pointer-events-none h-8 w-fit translate-y-3 px-2 transition-transform duration-200 ease-in-out will-change-transform group-hover:translate-y-0"
                      >
                        View Tweet
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </Masonary>
          </div>
        </div>
      </section>
    </div>
  )
}
