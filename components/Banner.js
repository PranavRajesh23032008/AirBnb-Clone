import Image from "next/image";
function Banner() {
  var Scroll = require("react-scroll");
  var Element = Scroll.Element;
  var scroller = Scroll.scroller;
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:11-[500px] xl:h-[600px] 2x1:h-[700px]">
      {" "}
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />{" "}
      <div className="absolute top-1/2 w-full text-center">
        {" "}
        <p className="text-sm font-semibold sm:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button
          onClick={() => {
            scroller.scrollTo("loactions", {
              duration: 1500,
              delay: 100,
              smooth: "easeInOutQuint",
            });
          }}
          className="text-purple-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          {" "}
          I'm flexible{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
export default Banner;
