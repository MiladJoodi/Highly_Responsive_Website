import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
  title: "Not Found Detected",
  description:
    "This pages is showing for the 404 or not found pages declaration. The route you are in it may not serve in the browser or may not be available or existed.",
};

const NotFoundPage = () => {
  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-teal-600">404</p>
        <h1 className="mt-4 text-3xl tracking-tight text-gray-900 sm:text-5xl font-bold">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.{" "}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
          >
            Go back home
          </Link>
          <Link
            href="/contactme"
            className="text-sm font-semibold text-gray-900"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;