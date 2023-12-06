import PropTypes from "prop-types";

const UpdateBox = ({ item }) => {
  return (
    <div
      className="update-box"
      style={{
        backgroundColor: item ? "firebrick" : "gray",
        transition: "0.5s",
      }}
    >
      <p> Update Box</p>
      <p>{item.toString()}</p>
    </div>
  );
};

UpdateBox.propTypes = {
  item: PropTypes.boolean,
  setItem: PropTypes.func,
};

export default UpdateBox;
