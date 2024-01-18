// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Separator } from "@/components/ui/separator";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { CountUp } from "countup.js";

export function AboutUs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const countupRef = useRef<HTMLHeadingElement[]>([]);
  const countUpAnim = [
    new CountUp("0", 0),
    new CountUp("0", 0),
    new CountUp("0", 0),
  ];

  useEffect(() => {
    if (inView) {
      initCountUp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  async function initCountUp() {
    const countUpModule = await import("countup.js");
    countUpAnim[0] = new countUpModule.CountUp(
      countupRef.current[0] as HTMLHeadingElement,
      32,
      { useEasing: false, duration: 3.5 },
    );
    countUpAnim[1] = new countUpModule.CountUp(
      countupRef.current[1] as HTMLHeadingElement,
      125,
      { useEasing: false, duration: 3.5 },
    );
    countUpAnim[2] = new countUpModule.CountUp(
      countupRef.current[2] as HTMLHeadingElement,
      135000,
      { useEasing: false, duration: 3.5 },
    );
    if (
      !countUpAnim[0].error &&
      !countUpAnim[1].error &&
      !countUpAnim[2].error
    ) {
      countUpAnim.forEach((countUp) => countUp.start());
    } else {
      countUpAnim.forEach((countUp) => {
        if (countUp.error) {
          console.error(countUp.error);
        }
      });
    }
  }

  return (
    <>
      <div className="relative my-20 px-6 sm:px-16 md:px-28 lg:px-40">
        <div className="w-full">
          <div className="mx-auto rounded-xl bg-gradient-to-br from-orange-300 via-orange-400 to-orange-300 pb-4 sm:pb-7 pt-8 sm:pt-14 shadow-xl">
            <div
              ref={ref}
              className="flex w-full items-center justify-evenly text-center text-[3.5vw] font-bold text-white md:text-[2.5vw]"
            >
              <div>
                +
                <h2
                  ref={(ref) => (countupRef.current[0] = ref!)}
                  className="inline-block"
                />
                <p className="pl-2">Branch</p>
              </div>
              <div className="block h-20 sm:h-40 w-0.5 bg-white" />
              <div>
                +
                <h2
                  ref={(ref) => (countupRef.current[1] = ref!)}
                  className="inline-block"
                />
                <p className="pl-2">Partners</p>
              </div>
              <div className="block h-20 sm:h-40 w-0.5 bg-white" />
              <div>
                +
                <h2
                  ref={(ref) => (countupRef.current[2] = ref!)}
                  className="inline-block"
                />
                <p className="pl-2">Orders</p>
              </div>
            </div>
            <div className="pt-2.5 sm:pt-6">
              <p className="text-center text-sm sm:text-2xl font-semibold text-white px-4">
                -We reach Customers Wherever and Whenever They Are-
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
