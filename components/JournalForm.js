class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sleep: "0 hour(s)", mood: "okay" };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert(
      "You recorded " +
        this.state.sleep +
        " of sleep last night and that you were " +
        this.state.mood +
        " today"
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          How many hours of sleep did you have?
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default JournalForm;
