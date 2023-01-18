const CountryCard = (props) => {
  return (
    <div
      className={`${props.colors.colors.elements} flex gap-4 flex-col rounded w-[320px] drop-shadow-lg`}
    >
      <div className="h-[160px]">
        <img
          className="object-fill w-[320px] h-[160px] rounded-t"
          src={props.country.flags.png}
          alt={`${props.country.name.common} flag`}
        />
      </div>
      <div className="px-8 pt-4 pb-12">
        <h2
          className={`${props.colors.colors.text} text-[24px] font-bold mb-4`}
        >
          {props.country.name.common}
        </h2>
        <div className="flex flex-col gap-2">
          <div>
            <label
              className={`${props.colors.colors.text} font-semibold ${props.colors.colors.text}`}
            >
              Population:
            </label>
            <span
              className={`${
                props.colors.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
              } text-[16px]`}
            >{`   ${props.country.population.toLocaleString()}`}</span>
          </div>
          <div>
            <label
              className={`${props.colors.colors.text} font-semibold ${props.colors.colors.text}`}
            >
              Region:
            </label>
            <span
              className={`${
                props.colors.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
              } text-[16px]`}
            >{`   ${props.country.region}`}</span>
          </div>
          <div>
            <label
              className={`${props.colors.colors.text} font-semibold ${props.colors.colors.text}`}
            >
              Capital:
            </label>
            <span
              className={`${
                props.colors.isDark ? "text-[#c0c0c0]" : "text-[#808080]"
              } text-[16px]`}
            >{`   ${props.country.capital}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
