import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <footer
      className={
        "sticky dark:bg-gray-700 sm:hidden bg-white bottom-0 z-50 flex items-center shadow-lg p-5 md:px-10"
      }
    >
      <div className="flex items-center border-2 rounded-full flex-1 py-2 shadow-md">
        {" "}
        <input
          className="flex-grow pl-5 bg-transparent outline-none dark:text-white"
          type="text"
          placeholder="Start your search"
        />
      </div>
      <div className="ml-3 items-center space-x-4 justify-end text-gray-500 flex">
        {colorTheme === "light" ? (
          <button
            className={
              "rounded-full p-2 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-600"
            }
            onClick={() => setTheme("light")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dark:text-white h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        ) : (
          <button
            className={"rounded-full p-2 focus:outline-none hover:bg-gray-100 "}
            onClick={() => setTheme("dark")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dark:text-white h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        )}
        <button
          className={
            "rounded-full p-2 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-600 "
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dark:text-white h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </button>
        <div className="transition ease-out duration-300 cursor-pointer hover:shadow-lg flex items-center space-x-2 border-2 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dark:text-white h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dark:text-white h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Header;
