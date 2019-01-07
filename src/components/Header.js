import PropTypes from "prop-types";

function Header(props) {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
}

Header.defaultProps = {
  branding: "Contact Manager"
};

Header.proptypes = {
  branding: PropTypes.object.isRequired
};

export default Header;
