import Contact from "./Contact";

export class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "453-234-2341"
        },
        {
          id: 2,
          name: "Rex Mitchel",
          email: "rex@gmail.com",
          phone: "123-234-2345"
        },
        {
          id: 3,
          name: "Addy Osmani",
          email: "addy@gmail.com",
          phone: "089-234-2370"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
