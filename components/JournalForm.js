import Button from "react-bootstrap/Button";
import { mutate } from "swr";

class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: props.user, sleep: "0 hour(s)", mood: "okay" };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    var plantLevel = 0;
    plantLevel += parseInt(this.state.sleep);

    event.preventDefault();
    const body = {
      user: this.state.user,
      plantLevel: plantLevel,
    };

    const res = await fetch("/api/daily", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      mutate(userObj);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          How many hours of sleep did you have?
          <br></br>
          <select
            name="sleep"
            value={this.state.sleep}
            onChange={this.handleInputChange}
          >
            <option value="0 hour(s)">0 hour(s)</option>
            <option value="1 hour(s)">1 hour(s)</option>
            <option value="2 hour(s)">2 hour(s)</option>
            <option value="3 hour(s)">3 hour(s)</option>
            <option value="4 hour(s)">4 hour(s)</option>
            <option value="5 hour(s)">5 hour(s)</option>
            <option value="6 hour(s)">6 hour(s)</option>
            <option value="7 hour(s)">7 hour(s)</option>
            <option value="8 hour(s)">8 hour(s)</option>
            <option value="9 hour(s)">9 hour(s)</option>
            <option value="10+ hour(s)">10+ hour(s)</option>
          </select>
        </label>
        <br></br>
        <label>
          How are you feeling today?
          <br></br>
          <select
            name="mood"
            value={this.state.mood}
            onChange={this.handleInputChange}
          >
            <option value="happy">:)</option>
            <option value="okay">:|</option>
            <option value="sad">:'(</option>
            <option value="angry">>:(</option>
          </select>
        </label>
        <br></br>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}
export default JournalForm;
