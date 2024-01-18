import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetCategoryDetail } from "@/features/useGetCategoryDetail";
import { CategoryDetailSkeleton } from "@/components/Skeleton";
import { Category } from "@/types";

export function CategoryDetail() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const { data, isLoading, isError } = useGetCategoryDetail({
    queryKey: [categoryName as string],
    categoryName: categoryName as string,
  });

  console.log(data);
  return (
    <>
      <section
        id="categoryDetail"
        className="min-h-[calc(100svh-var(--header-height)-var(--footer-height))] px-24 pb-16 pt-10 max-[560px]:px-10 lg:px-28"
      >
        <div className="mx-auto w-fit rounded-xl bg-orange-400 px-16 py-2 shadow-xl max-[380px]:px-6">
          <p className="text-center font-salsa text-2xl text-white">
            Choose Your Meals!
          </p>
        </div>
        <div className="mt-10 grid w-full gap-6 max-sm:grid-cols-2 max-[435px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 xl:grid-cols-5">
          {isLoading && <CategoryDetailSkeleton />}
          {isError && !isLoading && data === undefined && (
            <p className="col-span-3 col-start-2 mt-4 text-center text-xl">
              Something went wrong in server, try again later!
            </p>
          )}
          {data?.meals?.map((food: Category) => (
            <div
              key={food?.idMeal}
              className="relatives hadow-xl group mx-auto w-full max-w-[235px] ring-1 ring-gray-100"
            >
              <div className="relative h-40 rounded-2xl bg-black group-hover:bg-white">
                <Link to={food?.idMeal} className="rounded-2xl">
                  <img
                    src={food?.strMealThumb}
                    alt="content image"
                    className="absolute h-40 w-full rounded-2xl rounded-t-[inherit] opacity-50 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="flex h-full w-full items-center justify-center group-hover:hidden">
                    <p className="z-10 px-2 text-center font-semibold text-white">
                      {food?.strMeal}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          {data?.meals === null && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3">
              <p className="text-center text-lg">
                There's no Category You've Searched.
              </p>
              <p className="text-center text-lg">
                Choose the Category in Homepage
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
