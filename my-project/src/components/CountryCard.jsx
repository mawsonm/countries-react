import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/${props.country.cca3}`, {
          state: { country: props.country, countryMap: props.countryMap },
        })
      }
      className={`${props.theme.colors.elements} flex gap-4 flex-col rounded w-[320px] drop-shadow-lg cursor-pointer xl:transition-transform xl:hover:translate-y-2`}
    >
      <div className="h-[160px]">
        <img
          className="object-fill w-[320px] h-[160px] rounded-t"
          src={props.country.flags.png}
          alt={`${props.country.name.common} flag`}
        />
      </div>
      <div className="px-8 pt-4 pb-12">
        <h2 className={`${props.theme.colors.text} text-[24px] font-bold mb-4`}>
          {props.country.name.common}
        </h2>
        <div className="flex flex-col gap-2">
          <div>
            <label
              className={`${props.theme.colors.text} font-semibold ${props.theme.colors.text}`}
            >
              Population:
            </label>
            <span
              className={`${
                props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
              } text-[16px]`}
            >{`   ${props.country.population.toLocaleString()}`}</span>
          </div>
          <div>
            <label
              className={`${props.theme.colors.text} font-semibold ${props.theme.colors.text}`}
            >
              Region:
            </label>
            <span
              className={`${
                props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
              } text-[16px]`}
            >{`   ${props.country.region}`}</span>
          </div>
          <div>
            <label
              className={`${props.theme.colors.text} font-semibold ${props.theme.colors.text}`}
            >
              Capital:
            </label>
            <span
              className={`${
                props.theme.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
              } text-[16px]`}
            >{`   ${
              props.country.capital ? props.country.capital : "N/A"
            }`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
