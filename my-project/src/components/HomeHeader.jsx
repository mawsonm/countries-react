import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const HomeHeader = (props) => {
  return (
    <div className="flex justify-between items-center flex-wrap py-16">
      <div className="relative w-96">
        <input
          className={`${props.colors.colors.elements} ${props.colors.colors.text} focus:outline-none rounded py-4 px-16 ${props.colors.colors.placeholder} w-96`}
          placeholder="Search for a country..."
        />
        <FontAwesomeIcon
          className="absolute left-6 top-5"
          icon={faMagnifyingGlass}
          color={props.colors.isDark ? "white" : "grey"}
        />
      </div>
      <div className="relative">
        <select
          className={`${props.colors.colors.elements} ${props.colors.colors.text} font-semibold focus:outline-none px-6 py-4 rounded w-56 appearance-none`}
        >
          <option className="font-semibold" selected>
            Filter by Region
          </option>
          <option className="font-semibold">Africa</option>
          <option className="font-semibold">America</option>
          <option className="font-semibold">Asia</option>
          <option className="font-semibold">Europe</option>
          <option className="font-semibold">Oceania</option>
        </select>
        <FontAwesomeIcon
          className="absolute right-6 top-5"
          icon={faAngleDown}
          color={props.colors.isDark ? "white" : "grey"}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
