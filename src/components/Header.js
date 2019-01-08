function Header(props) {
  const { branding } = props;
  return (
    <div>
      <h2 style={headingStyle}>{branding}</h2>
    </div>
  );
}

Header.defaultProps = {
  branding: "Contact Manager"
};

const headingStyle = {
  color: "teal"
};

export default Header;
