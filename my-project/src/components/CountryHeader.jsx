import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const CountryHeader = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start">
      <button
        onClick={() => navigate("/")}
        className={`rounded px-8 py-2 my-20 ${props.theme.colors.text} ${props.theme.colors.elements} drop-shadow-lg`}
      >
        <FontAwesomeIcon
          className="mr-2"
          icon={faArrowLeftLong}
          color={props.theme.isDark ? "white" : "black"}
        />
        Back
      </button>
    </div>
  );
};

export default CountryHeader;
