import Card from "./Card";
import Wrapper from "./Wrapper";
import useFetch from "../utils/hooks/useFetch";
import { RocketDetails } from "./";

const ExploreRockets = () => {
  const { data, error } = useFetch(
    "https://api.spacexdata.com/v3/rockets",
    Array(2).fill({})
  );

  return (
    <section className="bg-gray-950 py-20">
      <Wrapper>
        <div className="relative px-8">
          <h2 className="mb-16 text-center text-3xl font-extrabold leading-none md:text-4xl xl:text-5xl">
            Explore Rockets
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {data?.map((item, index) => (
              <Card
                key={item.rocket_id || index}
                item={item}
                title={item?.rocket_name}
                description={item?.description}
                image={item?.flickr_images?.[0]}
                tag={item?.country}
                popupContent={<RocketDetails item={item} />}
              />
            ))}
          </div>

          {!data?.length && (
            <div className="text-center text-2xl">Oops, no rockets found!</div>
          )}

          {error && <div className="text-center text-2xl">{error}</div>}
        </div>
      </Wrapper>
    </section>
  );
};

export default ExploreRockets;
