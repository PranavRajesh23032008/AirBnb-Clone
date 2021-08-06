const Footer = () => {
  return (
    <div className="text-gray-800  grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 mx-auto bg-gray-100">
      <div className="space-y-4 text-xs ">
        {" "}
        <h1 className="font-bold">ABOUT</h1>{" "}
        <p className={"text-gray-600"}>HOW Airbnb works</p>{" "}
        <p className={"text-gray-600"}>News room</p>{" "}
        <p className={"text-gray-600"}>Investors</p>{" "}
        <p className={"text-gray-600"}>Airbnb Plus</p>{" "}
        <p className={"text-gray-600"}>Airbnb luxe</p>{" "}
      </div>
      <div className="space-y-4 text-xs ">
        {" "}
        <h1 className="font-bold">COMMUNITY</h1>{" "}
        <p className={"text-gray-600"}>Diversity & Belonging</p>{" "}
        <p className={"text-gray-600"}>Accessibility</p>{" "}
        <p className={"text-gray-600"}>Airbnb Associates</p>{" "}
        <p className={"text-gray-600"}>Frontline Stays</p>{" "}
        <p className={"text-gray-600"}>Guest Referrals</p>{" "}
      </div>
      <div className="space-y-4 text-xs ">
        {" "}
        <h1 className="font-bold">HOST</h1>{" "}
        <p className={"text-gray-600"}>Host your home</p>{" "}
        <p className={"text-gray-600"}>Host an Online Experience</p>{" "}
        <p className={"text-gray-600"}>Host an Experience</p>{" "}
        <p className={"text-gray-600"}>Responsible hosting</p>{" "}
        <p className={"text-gray-600"}>Resource Centre</p>{" "}
      </div>
      <div className="space-y-4 text-xs ">
        {" "}
        <h1 className="font-bold">SUPPORT</h1>{" "}
        <p className={"text-gray-600 -200"}>Our COVID-19 Response</p>{" "}
        <p className={"text-gray-600 -200"}>Help Centre</p>{" "}
        <p className={"text-gray-600 -200"}>Cancellation options</p>{" "}
        <p className={"text-gray-600 -200"}>Neighbourhood Support</p>{" "}
        <p className={"text-gray-600 -200"}>Trust & Safety</p>{" "}
      </div>
    </div>
  );
};

export default Footer;
