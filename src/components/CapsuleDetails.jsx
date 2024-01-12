const CapsuleDetails = ({ item }) => {
  return (
    <div className="p-4 md:p-5 space-y-4">
      <p className="text-base leading-relaxed">{item?.details}</p>
      <h4 className="text-lg font-bold">More Details</h4>
      <p>
        Capsule Serial:{" "}
        <span className="font-bold">{item?.capsule_serial}</span>
      </p>
      <p>
        Status: <span className="font-bold capitalize">{item?.status}</span>
      </p>
      <p>
        Launched On:{" "}
        <span className="font-bold">
          {new Date(item?.original_launch).toLocaleString()}
        </span>
      </p>
      <p>
        Landings: <span className="font-bold">{item?.landings}</span>
      </p>
      <div>
        Missions:{" "}
        {item?.missions?.length > 0 ? (
          <ul className="ml-2 list-item">
            {item?.missions?.map((mission, i) => (
              <li key={i}>
                Name: {mission.name}, Flight: {mission.flight}
              </li>
            ))}
          </ul>
        ) : (
          "No missions"
        )}
      </div>
    </div>
  );
};

export default CapsuleDetails;
