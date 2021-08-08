import Header from "../components/Header";
import Map from "../components/Map";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import InfoCard from "../components/infoCard";
import { format } from "date-fns";

import { useEffect } from "react";
import { useState } from "react";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;
  const [formattedStartDate, setFormattedStartDate] = useState(undefined);
  const [formattedEndDate, setFormattedEndDate] = useState(undefined);

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  useEffect(() => {
    setFormattedStartDate(format(new Date(startDate), "dd MMMM yy"));
    setFormattedEndDate(format(new Date(endDate), "dd MMMM yy"));
  }, []);
  return (
    <div className=" h-screen">
      <title>Places to stay in {location}</title>
      <Header />
      <main className="max-w-7xl mb-10 mx-auto flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - <b>{range}</b> - for {guests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-norap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className={"hidden lg:min-w-[450px] md:inline-flex"}>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
