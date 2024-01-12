const RocketDetails = ({ item }) => {
  return (
    <div className="p-4 md:p-5 space-y-4">
      <p className="text-base leading-relaxed">{item?.description}</p>
      <h4 className="text-lg font-bold">More Details</h4>
      <p>
        Active: <span className="font-bold">{item?.active ? "Yes" : "No"}</span>
      </p>
      <p>
        Success Percentage:{" "}
        <span className="font-bold">{item?.success_rate_pct}%</span>
      </p>
      <p>
        First Flight On: <span className="font-bold">{item?.first_flight}</span>
      </p>
      <p>
        Height:{" "}
        <span className="font-bold">
          {item?.height?.meters} meter {item?.height?.feet}
          feet
        </span>
      </p>
      <p>
        Learn More on{" "}
        <a
          className="underline text-gray-50 hover:text-gray-950 duration-300"
          href={item?.wikipedia}
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>
      </p>
    </div>
  );
};

export default RocketDetails;
