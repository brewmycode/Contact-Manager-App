export class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      showInfo: true
    };
  }
  onShowClick(e) {
    this.setState({ showInfo: !this.state.showInfo });
  }
  onDelClick(e) {
    console.log("Clicked");
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { showInfo } = this.state;

    return (
      <div>
        <h3>
          {name}
          <span
            onClick={this.onShowClick.bind(this)}
            className="icon-chevron-small-down"
            style={{ cursor: "pointer" }}
          />
          <span
            onClick={this.onDelClick.bind(this)}
            className="icon-cross"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          />
        </h3>
        {showInfo ? (
          <ul>
            <li>email: {email}</li>
            <li>phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
