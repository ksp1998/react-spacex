import { useMemo, useState } from "react";
import Card from "./Card";
import Wrapper from "./Wrapper";
import useFetch from "../utils/hooks/useFetch";
import { CapsuleDetails } from "./";

const initialFilters = {
  limit: 4,
  status: "",
  order: "asc",
  sort: "capsule_serial",
  offset: 0,
};

const ExploreCapsules = () => {
  const [filters, setFilters] = useState(initialFilters);

  const endpoint = useMemo(() => {
    const params = new URLSearchParams(filters).toString();
    return `https://api.spacexdata.com/v3/capsules?${params}`;
  }, [filters]);

  const { data: capsules, error } = useFetch(
    endpoint,
    Array(filters.limit).fill({})
  );

  const onChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      offset: 0,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-gray-900 py-20">
      <Wrapper>
        <h2 className="relative mb-16 text-center text-3xl font-extrabold leading-none md:text-4xl xl:text-5xl">
          Explore Capsules
        </h2>

        <div className="lg:sticky top-0 p-8 flex flex-col items-center gap-5 z-10 bg-gray-900">
          <form onSubmit={handleSubmit} className="block w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <div className="relative overflow-hidden w-[min(100%,500px)]">
                <label htmlFor="limit">
                  Limit
                  <select
                    id="limit"
                    name="limit"
                    value={filters?.limit}
                    className="w-full px-6 py-4 text-white text-lg bg-gray-700 outline-none z-10 rounded-md"
                    onChange={onChange}
                  >
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                  </select>
                </label>
              </div>

              <div className="relative overflow-hidden w-[min(100%,500px)]">
                <label htmlFor="status">
                  Status
                  <select
                    id="status"
                    name="status"
                    value={filters?.status}
                    className="w-full px-6 py-4 text-white text-lg bg-gray-700 outline-none z-10 rounded-md"
                    onChange={onChange}
                  >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="retired">Retired</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </label>
              </div>

              <div className="relative overflow-hidden w-[min(100%,500px)]">
                <label htmlFor="sort">
                  Sort by
                  <select
                    id="sort"
                    name="sort"
                    value={filters?.sortby}
                    className="w-full px-6 py-4 text-white text-lg bg-gray-700 outline-none z-10 rounded-md"
                    onChange={onChange}
                  >
                    <option value="capsule_serial">Capsule Serial</option>
                    <option value="status">Status</option>
                    <option value="original_launch">Launch</option>
                    <option value="landings">Landings</option>
                  </select>
                </label>
              </div>

              <div className="relative overflow-hidden w-[min(100%,500px)]">
                <label htmlFor="order">
                  Order
                  <select
                    id="order"
                    name="order"
                    value={filters?.order}
                    className="w-full px-6 py-4 text-white text-lg bg-gray-700 outline-none z-10 rounded-md"
                    onChange={onChange}
                  >
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                  </select>
                </label>
              </div>
            </div>
          </form>
          <button
            className="w-max inline-flex items-center bg-black justify-center px-5 py-3 font-medium text-center border border-gray-300 rounded-lg hover:scale-95 duration-300"
            onClick={() => {
              setFilters(initialFilters);
            }}
          >
            Reset Filters
          </button>
        </div>

        <div className="relative px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {capsules?.map(
              (item, index) =>
                index < filters.limit && (
                  <Card
                    key={item.capsule_serial || index}
                    item={item}
                    title={item?.capsule_serial}
                    description={item?.details}
                    image="/public/images/starlink-transparent.png"
                    tag={item?.type}
                    popupContent={<CapsuleDetails item={item} />}
                  />
                )
            )}
          </div>

          {!capsules?.length && (
            <div className="text-center text-2xl">Oops, no capsules found!</div>
          )}

          <div className="flex justify-between my-8">
            <button
              className="w-max inline-flex items-center bg-black justify-center px-5 py-3 font-medium text-center border border-gray-300 rounded-lg hover:scale-95 duration-300 disabled:opacity-50"
              disabled={filters.offset === 0}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  offset:
                    Number(prev.offset) > 0
                      ? Number(prev.offset) - Number(prev.limit)
                      : Number(prev.offset),
                }))
              }
            >
              Prev
            </button>
            <button
              className="w-max inline-flex items-center bg-black justify-center px-5 py-3 font-medium text-center border border-gray-300 rounded-lg hover:scale-95 duration-300 disabled:opacity-50"
              disabled={capsules.length < filters.limit}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  offset: Number(prev.offset) + Number(prev.limit),
                }))
              }
            >
              Next
            </button>
          </div>

          {error && <div className="text-center text-2xl">{error}</div>}
        </div>
      </Wrapper>
    </section>
  );
};

export default ExploreCapsules;
