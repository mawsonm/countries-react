import CountryHeader from "../components/CountryHeader";
import CountryDetails from "../components/CountryDetails";

const Country = (props) => {
  return (
    <div
      className={`${props.theme.colors.background} min-h-[calc(100vh-92px)]`}
    >
      <div className={`max-w-1280px container mx-auto px-8`}>
        <CountryHeader theme={props.theme} />
        <CountryDetails theme={props.theme} country={props.country} />
      </div>
    </div>
  );
};
export default Country;
