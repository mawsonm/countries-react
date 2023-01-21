import CountryCard from "./CountryCard";

const HomeGrid = (props) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12 place-items-center ${props.colors.colors.background}`}
    >
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
