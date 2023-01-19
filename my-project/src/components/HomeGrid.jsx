import CountryCard from "./CountryCard";

const HomeGrid = (props) => {
  return (
    <div
      className={`grid grid-cols-4 gap-12 ${props.colors.colors.background}`}
    >
      {props.countries.length == 0 && (
        <div className="grid place-content-center row-span-2 col-span-4">
          <h2
            className={`text-center text-[64px] font-semibold ${props.colors.colors.text}`}
          >
            No countries found.
          </h2>
          <p
            className={`text-center text-[24px] font-semibold ${props.colors.colors.text}`}
          >
            Please alter your search criteria and try again.
          </p>
        </div>
      )}
      {props.countries.map((country, index) => (
        <CountryCard
          country={country}
          key={index}
          colors={props.colors}
          countryMap={props.countryMap}
        />
      ))}
    </div>
  );
};

export default HomeGrid;
