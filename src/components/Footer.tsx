import { Link } from "react-router-dom";
export function Footer() {
  return (
    <>
      <footer>
        <div className="flex min-h-24 w-full flex-col items-center justify-center bg-gray-100 text-center text-sm text-gray-500">
          <p className="font-semibold">
            &copy; 2024 YourMeal App. All rights reserved.
          </p>
          <p>
            Made with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by{" "}
            <Link to="" className="text-orange-400 hover:text-orange-500">
              YourMeal
            </Link>
          </p>
          <p className="pt-2">
            Developer Contact:{" "}
            <span className="text-zinc-500 underline hover:text-blue-400">
              <Link to="https://api.whatsapp.com/send/?phone=6282293105626&" target="_blank">
                Naufal Nasrullah
              </Link>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
