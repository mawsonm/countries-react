import HomeHeader from "../components/HomeHeader";
import HomeGrid from "../components/HomeGrid";
const Home = (props) => {
  console.log(props.colors);
  return (
    <div className={`${props.colors.colors.background}`}>
      <div className="max-w-1280px container mx-auto">
        <HomeHeader colors={props.colors} />
        <HomeGrid colors={props.colors.colors} />
      </div>
    </div>
  );
};

export default Home;
