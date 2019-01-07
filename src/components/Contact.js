export class Contact extends React.Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <ul>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
