import { useLocation, useNavigate } from "react-router-dom";

const CountryDetails = (props) => {
  const location = useLocation();

  const navigate = useNavigate();

  const country = location.state.country;
  const countryMap = location.state.countryMap;

  const transformObj = (keys, currencyFlag) => {
    let str = "";
    keys.forEach((key, index) => {
      if (currencyFlag) {
        str += country.currencies[key].name;
      } else {
        str += country.languages[key];
      }
      if (index != keys.length - 1) {
        str += ", ";
      }
    });
    return str;
  };
  let capitals = "";
  country.capital.forEach((capital, index) => {
    capitals += capital;
    if (index != country.capital.length - 1) {
      capitals += ", ";
    }
  });

  const languages = transformObj(Object.keys(country.languages), false);
  const currencies = transformObj(Object.keys(country.currencies), true);
  const nativeName =
    country.name.nativeName[Object.keys(country.name.nativeName)[0]].common;

  return (
    <div className="grid grid-cols-2 gap-8 ">
      <img
        src={country.flags.svg}
        className="object-cover w-[600px] h-[400px]"
      />
      <div className="py-8 flex flex-col justify-between items-start">
        <h2 className={`${props.theme.colors.text} text-[32px] font-bold mb-4`}>
          {country.name.common}
        </h2>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2 max-w-[50%]">
            <div>
              <label className={`font-semibold ${props.theme.colors.text}`}>
                Native Name:{" "}
              </label>
              <span
                className={`${
                  props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
                }`}
              >
                {" "}
                {nativeName}
              </span>
            </div>
            <div>
              <label className={`font-semibold ${props.theme.colors.text}`}>
                Population:{" "}
              </label>
              <span
                className={`${
                  props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
                }`}
              >
                {" "}
                {country.population.toLocaleString()}
              </span>
            </div>
            <div>
              <label className={`font-semibold ${props.theme.colors.text}`}>
                Region:{" "}
              </label>
              <span
                className={`${
                  props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
                }`}
              >
                {" "}
                {country.region}
              </span>
            </div>
            <div>
              <label className={`font-semibold ${props.theme.colors.text}`}>
                Sub Region:{" "}
              </label>
              <span
                className={`${
                  props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
                }`}
              >
                {" "}
                {country.subregion}
              </span>
            </div>
            <div>
              <label className={`font-semibold ${props.theme.colors.text}`}>
                Capital:{" "}
              </label>
              <span
                className={`${
                  props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
                }`}
              >
                {" "}
                {capitals}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-w-[50%]">
            <div>
              <label className={`font-semibold ${props.theme.colors.text}`}>
                Top Level Domain:{" "}
              </label>
              <span
                className={`${
                  props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
                }`}
              >
                {" "}
                {country.tld}
              </span>
            </div>
            <div>
              <label className={`font-semibold ${props.theme.colors.text}`}>
                Currencies:{" "}
              </label>
              <span
                className={`${
                  props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
                }`}
              >
                {" "}
                {currencies}
              </span>
            </div>
            <div>
              <label className={`font-semibold ${props.theme.colors.text}`}>
                Languages:{" "}
              </label>
              <span
                className={`${
                  props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
                }`}
              >
                {" "}
                {languages}
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-8 items-start">
          <label className={`font-semibold ${props.theme.colors.text}`}>
            Border Countries:{" "}
          </label>
          <div class="flex flex-wrap gap-4 ml-4">
            {country.borders ? (
              country.borders.map((border, index) => {
                return (
                  <div
                    key={index}
                    onClick={() =>
                      navigate(`/${border}`, {
                        state: {
                          country: countryMap.get(border),
                          countryMap: countryMap,
                        },
                      })
                    }
                    className={`rounded w-[110px] py-1 flex place-content-center items-center drop-shadow-lg ${props.theme.colors.elements} cursor-pointer transition-transform hover:translate-y-1 `}
                  >
                    <span className={`${props.theme.colors.text} text-center`}>
                      {countryMap.get(border).name.common}
                    </span>
                  </div>
                );
              })
            ) : (
              <span
                className={`italic ${
                  props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
                }`}
              >
                {" "}
                N/A
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
