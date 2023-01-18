import CountryCard from "./CountryCard";

const HomeGrid = (props) => {
  return (
    <div
      className={`grid grid-cols-4 gap-12 ${props.colors.colors.background}`}
    >
      {props.countries.map((country, index) => (
        <CountryCard country={country} key={index} colors={props.colors} />
      ))}
    </div>
  );
};

export default HomeGrid;
