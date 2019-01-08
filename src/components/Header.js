function Header(props) {
  const { branding } = props;
  return (
    <div>
      <h1 style={headingStyle}>{branding}</h1>
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
