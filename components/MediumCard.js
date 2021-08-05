import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image className={"rounded-2xl"} src={img} layout="fill" />{" "}
      </div>{" "}
      <h3 className="text-xl font-semibold mt-3">{title}</h3>{" "}
    </div>
  );
}
export default MediumCard;
