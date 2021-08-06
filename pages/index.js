import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
  return (
    <div className={" "}>
      <Head>
        <title>
          AirBnb: Holiday, Rental, Cabins, Beach Houses, Unique Homes and
          Experiences
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header position="top-0" />
      <Banner />
      <main name={"loactions"} className=" max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          {" "}
          <h2 className="text-4x1 font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className={"text-4xl font-semibold py-8"}>Live Anywhere</h2>
          <div
            className={
              "space-x-3 flex overflow-scroll scrollbar-none p-3 -ml-3"
            }
          >
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img={"https://links.papareact.com/4cj"}
          title={"The Greatest Outdoors"}
          description={"Wishlists curated by AirBnb"}
          buttonText={"Get inspired"}
          className={"text-black"}
          redirectURL={
            "https://www.airbnb.co.in/s/all?refinement_paths%5B%5D=%2Fplaylists%2F46837"
          }
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://jsonkeeper.com/b/VHHT").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
