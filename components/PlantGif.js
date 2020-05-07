import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class PlantGif extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { value: 0 };
    this.plant = 10;
    this.plantIMG = "plantFrames/frame_00_delay-0.04s.gif";
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async returnPlantLevel() {
    const res = await fetch("/api/daily?sub=" + this.user.sub);
    // if (res.status === 201) {
    //   const userObj = await res.json();
    //   mutate(userObj);
    // }
    return res.json();
  }

  handleInputChange(event) {
    //this.plant++;
    if (this.plant < 10) {
      this.plantIMG = "plantFrames/frame_0" + this.plant + "_delay-0.04s.gif";
    } else if (this.plant < 60) {
      this.plantIMG = "plantFrames/frame_" + this.plant + "_delay-0.04s.gif";
    } else {
      this.plant = 0;
    }
    console.log(this.plantIMG);

    this.setState({ update: 0 });
  }

  async componentDidMount() {
    const plantLevel = await this.returnPlantLevel();
    if (plantLevel) {
      this.plant = plantLevel.PlantLevel;
    } else {
      this.plant = 1;
    }
    if (this.plant < 10) {
      this.plantIMG = "plantFrames/frame_0" + this.plant + "_delay-0.04s.gif";
    } else if (this.plant < 60) {
      this.plantIMG = "plantFrames/frame_" + this.plant + "_delay-0.04s.gif";
    } else {
      this.plant = 0;
    }
    console.log(this.plantIMG);

    this.setState({ update: 0 });
  }

  render() {
    return (
      <>
        <Button name="sleep" onClick={this.handleInputChange}>
          {" "}
          Grow!{" "}
        </Button>

        <Image src={this.plantIMG}></Image>
      </>
    );
  }
}
export default PlantGif;
