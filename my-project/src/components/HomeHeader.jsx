import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HomeHeader = (props) => {
  const changeRegion = (e) => {
    props.selectRegion(e.target.value);
  };

  const changeSearch = (e) => {
    props.setNameFilter(e.target.value);
  };

  return (
    <div className="flex sm:flex-row flex-col sm:justify-between gap-12 sm:items-center items-start py-16 sm:w-full w-80 mx-auto">
      <div className="relative sm:w-96 w-80">
        <input
          onChange={changeSearch}
          className={`${props.theme.colors.elements} ${props.theme.colors.text} focus:outline-none rounded py-4 px-16 ${props.theme.colors.placeholder} sm:w-96 w-80`}
          placeholder="Search for a country..."
        />
        <FontAwesomeIcon
          className="absolute left-6 top-5"
          icon={faMagnifyingGlass}
          color={props.theme.isDark ? "white" : "grey"}
        />
      </div>
      <div className="relative">
        <select
          value={props.selectedRegion}
          onChange={changeRegion}
          className={`${props.theme.colors.elements} ${props.theme.colors.text} font-semibold focus:outline-none px-6 py-4 rounded w-56 appearance-none`}
        >
          <option value="" key={0} className="font-semibold">
            Filter by Region
          </option>
          {props.regions.map((region, index) => (
            <option value={region} key={index + 1} className="font-semibold">
              {region}
            </option>
          ))}
        </select>
        <FontAwesomeIcon
          className="absolute right-6 top-5"
          icon={faAngleDown}
          color={props.theme.isDark ? "white" : "grey"}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
