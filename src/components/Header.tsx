import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useHeaderVisibilityOnScroll } from "@/hooks/useHeaderVisibilityOnScroll";

export function Header() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path: string = pathname.replace("/", "");
    const activeState: HTMLElement = document.getElementById(
      `${path}-navlink`,
    ) as HTMLElement;
    if (!activeState) return;
    activeState.classList.add(
      "border-orange-400",
      "text-orange-400",
      "border-b-2",
    );

    return () => {
      activeState.classList.remove(
        "border-orange-400",
        "text-orange-400",
        "border-b-2",
      );
    };
  }, [pathname]);

  useHeaderVisibilityOnScroll("header");

  return (
    <>
      <header
        id="header"
        className="sticky top-0 z-50 block w-full transition-all duration-700"
      >
        <nav className="flex min-h-20 w-full justify-between bg-[#fff]/95 shadow-lg shadow-zinc-200 backdrop-blur-[10px]">
          <div className="flex w-[80%] items-center gap-4 py-1 pl-6 max-[300px]:pl-3 lg:py-3.5 lg:pl-28">
            <div className="flex w-full items-center gap-4 max-[300px]:gap-1.5">
              <div className="block w-[80%]">
                <h1 className="text-xl font-bold text-orange-500 sm:text-2xl">
                  <Link to="/" className="hover:text-orange-400">
                    YourMeal App
                  </Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden pl-6 md:flex lg:pr-28">
            <ul className="flex h-full items-center text-nowrap text-orange-500">
              <li
                id="home-navlink"
                className={`flex h-full items-center px-3.5 ${
                  pathname === "/" &&
                  "border-b-2 border-orange-400 text-orange-400"
                }`}
              >
                <Link
                  to="/"
                  className="text-sm font-semibold hover:text-orange-400"
                >
                  Home
                </Link>
              </li>
              <li
                id="category-navlink"
                className="flex h-full items-center px-3.5"
              >
                <Link
                  to="/category"
                  className="text-sm font-semibold hover:text-orange-400"
                >
                  Category
                </Link>
              </li>
              <li id="menu-navlink" className="flex h-full items-center px-3.5">
                <Link
                  to="/menu"
                  className="text-sm font-semibold hover:text-orange-400"
                >
                  Menu List
                </Link>
              </li>
              <li
                id="nearby-navlink"
                className="flex h-full items-center px-3.5"
              >
                <Link
                  to="/nearby"
                  className="text-sm font-semibold hover:text-orange-400"
                >
                  Nearby
                </Link>
              </li>
              <li className="flex h-full items-center pl-4">
                <a
                  href="/#categoryList"
                  className="group text-sm font-semibold hover:text-orange-400"
                >
                  <button className="rounded-lg bg-orange-400 px-4 py-3 text-[1rem] text-white hover:shadow-xl group-hover:-translate-y-0.5 group-hover:bg-orange-500">
                    Order Now!
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-[20%] items-center justify-end pr-6 max-[300px]:pr-3 md:hidden">
            <button
              id="navbar-button"
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {}}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
