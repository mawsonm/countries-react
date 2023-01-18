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
    <div className="flex justify-between items-center flex-wrap py-16">
      <div className="relative w-96">
        <input
          onChange={changeSearch}
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
          value={props.selectedRegion}
          onChange={changeRegion}
          className={`${props.colors.colors.elements} ${props.colors.colors.text} font-semibold focus:outline-none px-6 py-4 rounded w-56 appearance-none`}
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
          color={props.colors.isDark ? "white" : "grey"}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
