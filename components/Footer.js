const Footer = () => {
  return (
    <div className="dark:bg-gray-600 text-gray-800 dark:text-white grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 mx-auto bg-gray-100">
      <div className="space-y-4 text-xs ">
        {" "}
        <h1 className="font-bold">ABOUT</h1>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>HOW Airbnb works</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>News room</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Investors</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Airbnb Plus</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Airbnb luxe</p>{" "}
      </div>
      <div className="space-y-4 text-xs ">
        {" "}
        <h1 className="font-bold">COMMUNITY</h1>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>
          Diversity & Belonging
        </p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Accessibility</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Airbnb Associates</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Frontline Stays</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Guest Referrals</p>{" "}
      </div>
      <div className="space-y-4 text-xs ">
        {" "}
        <h1 className="font-bold">HOST</h1>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Host your home</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>
          Host an Online Experience
        </p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Host an Experience</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>
          Responsible hosting
        </p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Resource Centre</p>{" "}
      </div>
      <div className="space-y-4 text-xs ">
        {" "}
        <h1 className="font-bold">SUPPORT</h1>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>
          Our COVID-19 Response
        </p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Help Centre</p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>
          Cancellation options
        </p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>
          Neighbourhood Support
        </p>{" "}
        <p className={"text-gray-600 dark:text-gray-200"}>Trust & Safety</p>{" "}
      </div>
    </div>
  );
};

export default Footer;
