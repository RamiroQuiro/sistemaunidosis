import Image from "next/image";
import logoCepsi from "../../../public/logocontorno.png";

export default function NavBar() {
  return (
    <header className="fixed w-full mx-auto">
      <div className="flex items-center justify-between py-5 px-10">
        <div className="text-center flex items-center gap-x-5">
          <div className="w-1/3 items-center mx-auto relative">
            <Image
              className="object-contain object-center"
              alt="logoCepsi"
              src={logoCepsi}
              width={100}
              height={100}
              quality={50}
            />
          </div>
          <div>
            <h1 className="text-xl text-left font-bold text-gray-800 sm:text-xl">
              CePSI Eva Perón
            </h1>

            <p className="mt-1.5  text-left text-sm text-gray-500">
              Sistema Etiqueta Unidosis
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          {/* <button
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
            >
              <span className="text-sm font-medium"> View Website </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button> */}

          <button
            className="block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            type="button"
          >
            Nueva Consulta
          </button>
        </div>
      </div>
    </header>
  );
}
