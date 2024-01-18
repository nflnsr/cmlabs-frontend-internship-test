import Markdown from "react-markdown";
import { useGetMealsDetail } from "@/features/useGetMealsDetail";
import { useParams } from "react-router-dom";
import { Meals } from "@/types";
import { generateValue } from "@/utils/generateValue";

export function MealsDetail() {
  const { mealsId } = useParams();
  const { data, isLoading, isError } = useGetMealsDetail({
    queryKey: [mealsId as string],
    mealsId: mealsId as string,
  });

  console.log(data?.meals);
  return (
    <>
      <section
        id="mealsDetail"
        className="min-h-[calc(100svh-var(--header-height)-var(--footer-height))] md:px-10 lg:px-28"
      >
        {isLoading && (
          <div className="h-[calc(100svh-var(--header-height)-var(--footer-height))]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-48 items-center justify-center">
                <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
              </div>
            </div>
          </div>
        )}
        {isError && !isLoading && data === undefined && (
          <p className="col-span-3 col-start-2 mt-4 text-center text-xl">
            Something went wrong in server, try again later!
          </p>
        )}
        {data?.meals?.map((meals: Meals, i: number) => {
          console.log("tes", i + 1);
          return (
            <div key={meals.idMeal}>
              <h1 className="pt-5 md:pt-10 px-2 text-center font-salsa text-3xl font-semibold text-orange-500 underline drop-shadow-lg">
                {meals.strMeal}
              </h1>
              <div className="mx-auto mt-5 px-5 md:px-0 md:mt-10 flex max-w-[800px] flex-col items-center md:flex-row md:items-start">
                <div className="relative max-h-96 max-w-96 overflow-hidden">
                  <img
                    src={meals.strMealThumb}
                    alt="meals"
                    className="size-full select-none rounded-2xl shadow-2xl duration-300 ease-in hover:scale-110 hover:cursor-grab hover:opacity-85 active:cursor-grabbing"
                  />
                </div>
                <div className="mx-auto flex md:w-1/2 flex-col items-center text-lg">
                  <ul className="mt-2 list-inside list-disc">
                    <p className="text-2xl font-bold text-gray-600">Recipes</p>
                    {generateValue({
                      data: meals,
                      prop: ["strMeasure", "strIngredient"],
                    })}
                  </ul>
                </div>
              </div>
              <div className="mx-auto max-w-[800px] py-10 px-14 max-[400px]:px-4">
                <p className="text-center text-2xl font-bold text-gray-600">
                  Instructions
                </p>
                <Markdown className="mt-1.5">{meals.strInstructions}</Markdown>
              </div>
              <div className="mx-auto pb-20 px-14 max-[400px]:px-4">
                <p className="text-center text-2xl font-bold text-gray-600">
                  Youtube Tutorial
                </p>
                <div className="mx-auto mt-2 aspect-video max-w-[800px]">
                  <iframe
                    src={`https://www.youtube.com/embed/${meals.strYoutube.split("=")[1]}`}
                    title="Video Yestrade"
                    allowFullScreen
                    className="size-full rounded-lg shadow-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          );
        })}
        {data?.meals === null && (
            <div className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3">
              <p className="text-center text-lg">
                There's no Meals You've Searched.
              </p>
              <p className="text-center text-lg">
                Choose the Meals after Choose the Category.
              </p>
            </div>
          )}
      </section>
    </>
  );
}
