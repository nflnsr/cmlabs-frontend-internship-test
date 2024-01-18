import DriverSvg from "@/assets/driver.svg";

import {
  BigChicken,
  BurgerIcon,
  Fruit,
  Icecream,
  Meat,
  MieBox,
  Pancake,
  Pizza,
  Popcorn,
  Rice,
} from "@/assets/icons";

export function HeroSection() {
  return (
    <>
      <section className="md:px-24 lg:px-28">
        <div className="mt-10 flex justify-between px-4 max-[1076px]:flex-col md:px-0">
          <div className="flex w-fit items-center justify-center text-wrap rounded-full bg-orange-200 px-4 py-2 max-[1076px]:mx-auto">
            <div className="mx-auto pl-8 pr-6 font-pacifico text-2xl text-orange-400">
              <p>Delivery</p>
              <p>Service</p>
            </div>
            <div className="rounded-full bg-zinc-100 p-2">
              <img src={DriverSvg} className="h-10 w-10" alt="" />
            </div>
          </div>
          <div className="max-[1076px]:mt-5">
            <div>
              <p className="text-center text-3xl font-thin text-gray-600 xl:text-4xl">
                Your Favorite Food, Delivered with{" "}
                <span className="font-semibold text-orange-400 underline decoration-orange-400 decoration-2">
                  Passion!
                </span>
              </p>
              <div className="mt-3 flex justify-end max-[1076px]:justify-center">
                <ul className="flex list-inside list-disc flex-wrap justify-center gap-x-6 text-right font-semibold text-orange-500 max-[500px]:flex-col max-[500px]:text-left lg:list-outside xl:gap-8">
                  <li className=" text-nowrap">High Quality</li>
                  <li className=" text-nowrap">Elegant of Taste</li>
                  <li className=" text-nowrap">Fast Delivery</li>
                  <li className=" text-nowrap">Best Price</li>
                  <li className=" text-nowrap">24/7 Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 w-full bg-slate-500 bg-food-pattern bg-cover bg-fixed bg-no-repeat py-24 bg-blend-multiply">
          <div className="mx-auto w-fit max-w-[400px] px-4">
            <div className="flex flex-wrap justify-center gap-5 ">
              <div className="rounded-full bg-orange-300 p-3">
                <BurgerIcon className="h-8 w-8 " />
              </div>
              <div className="rounded-full bg-orange-300 p-3">
                <BigChicken className="h-8 w-8 bg-orange-300 " />
              </div>
              <div className="rounded-full bg-orange-300 p-3">
                <MieBox className="h-8 w-8 bg-orange-300 " />
              </div>
              <div className="rounded-full bg-orange-300 p-3">
                <Popcorn className="h-8 w-8 bg-orange-300 " />
              </div>
              <div className="rounded-full bg-orange-300 p-3">
                <Pancake className="h-8 w-8 bg-orange-300 " />
              </div>
              <div className="rounded-full bg-orange-300 p-3">
                <Rice className="h-8 w-8 bg-orange-300 " />
              </div>
              <div className="rounded-full bg-orange-300 p-3">
                <Icecream className="h-8 w-8 bg-orange-300 " />
              </div>
              <div className="rounded-full bg-orange-300 p-3">
                <Fruit className="h-8 w-8 bg-orange-300 " />
              </div>
              <div className="rounded-full bg-orange-300 p-3">
                <Pizza className="h-8 w-8 bg-orange-300 " />
              </div>
              <div className="rounded-full bg-orange-300 p-3">
                <Meat className="h-8 w-8 bg-orange-300 " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
