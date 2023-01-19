import HomeHeader from "../components/HomeHeader";
import HomeGrid from "../components/HomeGrid";
import { useEffect, useState } from "react";

const Home = (props) => {
  const [countries, setCountries] = useState([]);

  const [nameFilter, setNameFilter] = useState("");
  const [selectedRegion, selectRegion] = useState("");

  const parseData = (data) => {
    console.log(data);
    setCountries(data);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP " + res.status);
        } else {
          return res.json();
        }
      })
      .then((data) => parseData(data));
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.region.includes(selectedRegion) &&
      country.name.common.toLowerCase().includes(nameFilter)
  );

  const regions = [...new Set(countries.map((country) => country.region))];
  console.log(regions);

  let countryAbreviationMap = new Map();
  countries.forEach((item) => {
    countryAbreviationMap.set(item.cca3, item);
  });

  return (
    <div
      className={`${props.colors.colors.background} min-h-[calc(100vh-92px)] px-16`}
    >
      <div className="max-w-1280px container mx-auto ">
        <HomeHeader
          colors={props.colors}
          selectRegion={selectRegion}
          selectedRegion={selectedRegion}
          setNameFilter={setNameFilter}
          nameFilter={nameFilter}
          regions={regions}
        />
        <HomeGrid
          colors={props.colors}
          countries={filteredCountries}
          countryMap={countryAbreviationMap}
        />
      </div>
    </div>
  );
};

export default Home;
