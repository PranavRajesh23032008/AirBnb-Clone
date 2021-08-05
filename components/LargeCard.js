import Image from "next/image";

function LargeCard({
  className,
  img,
  title,
  description,
  buttonText,
  redirectURL,
}) {
  return (
    <section className={`${className} relative pb-4 mt-5 cursor-pointer`}>
      <div className="relative h-96 min-w-(300px)">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        {" "}
        <h3 className="text-4xl font-semibold mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <a target={"_blank"} href={redirectURL}>
          <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-6">
            {" "}
            {buttonText}{" "}
          </button>{" "}
        </a>
      </div>{" "}
    </section>
  );
}
export default LargeCard;
