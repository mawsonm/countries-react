import CountryHeader from "../components/CountryHeader";
import CountryDetails from "../components/CountryDetails";

const Country = (props) => {
  return (
    <div
      className={`${props.theme.colors.background} min-h-[calc(100vh-92px)] sm:px-16 px-8`}
    >
      <div className={`max-w-1280px container mx-auto sm:px-8`}>
        <CountryHeader theme={props.theme} />
        <CountryDetails theme={props.theme} country={props.country} />
      </div>
    </div>
  );
};
export default Country;
