import PropTypes from "prop-types";

const UpdateBox = ({ item }) => {
  return (
    <div
      className="update-box"
      style={{
        width: "15rem",
        height: "15rem",
        backgroundColor: item ? "#FFAFCC" : "#A2D2FF",
        transition: "0.5s",
      }}
    >
      <p> Update Box</p>
      <p className="boolean-marker">{item.toString()}</p>
    </div>
  );
};

UpdateBox.propTypes = {
  item: PropTypes.boolean,
  setItem: PropTypes.func,
};

export default UpdateBox;
