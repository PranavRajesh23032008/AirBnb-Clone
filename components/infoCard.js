import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartIcon2 } from "@heroicons/react/solid";
import { useState } from "react";
import { IconButton } from "@material-ui/core";

function InfoCard({ img, location, title, description, star, price, total }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="rounded-2xl mb-3 flex flex-col sm:flex-row py-7 pr-4 px-2 border-b hover:opacity-90 hover:shadow-xl transition duration-200 ease-out first:border-t">
      <div className="relative h-40 w-58 mx-2 mb-5 sm:mb-1 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          className="rounded-3xl"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-sm  text-gray-500">{location}</p>
          <IconButton onClick={() => setLiked(!liked)}>
            {liked ? (
              <HeartIcon2 className="h-8 text-red-500" />
            ) : (
              <HeartIcon className="h-8" />
            )}
          </IconButton>
        </div>
        <h4 className="text-xl font-semibold ">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow ">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            <p className="">{star}</p>
          </p>
          <div>
            <p className="text-lg font-semibold lg:text-2xl pb-2 ">{price}</p>
            <p className="text-right font-extralight ">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
