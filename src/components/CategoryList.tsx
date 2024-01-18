import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { useGetCategoryList } from "@/features/useGetCategoryList";
import { CategoryListSkeleton } from "@/components/Skeleton";
import { Categories } from "@/types";

export function CategoryList() {
  const { data, isLoading, isError } = useGetCategoryList({
    queryKey: ["category-list"],
  });

  return (
    <>
      <section
        id="categoryList"
        className="px-24 pt-10 max-[560px]:px-10 lg:px-28"
      >
        <div className="mx-auto w-fit rounded-xl bg-orange-400 px-16 py-2 shadow-xl max-[380px]:px-6">
          <p className="select-none text-center font-salsa text-2xl text-white">
            Categories
          </p>
        </div>
        <div className="mt-10 grid w-full gap-6 max-sm:grid-cols-2 max-[435px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 xl:grid-cols-5">
          {isLoading && <CategoryListSkeleton />}
          {isError && !isLoading && data === undefined && (
            <p className="col-span-3 col-start-2 mt-4 text-center text-xl">
              Something went wrong in server, try again later!
            </p>
          )}
          {data?.categories.map((food: Categories) => (
            <div
              key={food?.idCategory}
              className="group relative mx-auto w-full max-w-[235px] rounded-xl shadow-xl ring-1 ring-gray-100 hover:ring-1 hover:ring-orange-400"
            >
              <div className="rounded-t-xl bg-slate-100 hover:bg-transparent">
                <Link to={food?.strCategory}>
                  <img
                    src={food?.strCategoryThumb}
                    alt="content image"
                    className="h-40 w-full rounded-t-xl px-4 pt-4 mix-blend-multiply group-hover:bg-orange-400"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="w-fit p-5 pt-3">
                <p className="line-clamp-3 w-fit text-lg font-medium hover:text-orange-500">
                  <Link to={food?.strCategory}>{food?.strCategory}</Link>
                </p>
                <p className="line-clamp-3">{food?.strCategoryDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
