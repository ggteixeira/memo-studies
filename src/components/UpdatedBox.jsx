import PropTypes from "prop-types";

const UpdateBox = ({ state }) => {
  return (
    <div
      className="update-box"
      style={{
        backgroundColor: state ? "#FFAFCC" : "#A2D2FF",
      }}
    >
      <div>
        <p> I'll always update on state changes</p>
      </div>
      <p className="boolean-marker">{state.toString().toUpperCase()}</p>
    </div>
  );
};

UpdateBox.propTypes = {
  state: PropTypes.boolean,
};

export default UpdateBox;
