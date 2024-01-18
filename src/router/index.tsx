import Home from "@/pages/Home";
import Categories from "@/pages/Categories";
import Meals from "@/pages/Meals";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "@/components";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryName" element={<Categories />} />
        <Route path="/:categoryName/:mealsId" element={<Meals />} />
        <Route
          path="*"
          element={
            <main className="min-h-[calc(100svh-var(--header-height)-var(--footer-height))]">
              <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3">
                <p>page not found</p>
              </section>
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
