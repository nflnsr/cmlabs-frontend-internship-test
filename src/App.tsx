import { SkeletonTheme } from "react-loading-skeleton";
import Router from "@/router"

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#eaeaea" highlightColor="#f5f5f5">
        <Router />
      </SkeletonTheme>
    </>
  );
}

export default App;
