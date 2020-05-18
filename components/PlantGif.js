import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

let myStyle = {
  width: "100px",
  height: "100px",
};

class PlantGif extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.state = { value: 0 };
    this.plant = 10;
    this.plantIMG = "plantframes/frame_00_delay-0.04s.gif";
  }

  async returnPlantLevel() {
    const res = await fetch("/api/daily?sub=" + this.user.sub);
    // if (res.status === 201) {
    //   const userObj = await res.json();
    //   mutate(userObj);
    // }
    return res.json();
  }

  async componentDidMount() {
    const plantLevel = await this.returnPlantLevel();
    if (plantLevel) {
      this.plant = Math.floor(plantLevel.PlantLevel / 4);
    } else {
      this.plant = 0;
    }
    if (this.plant < 10) {
      this.plantIMG = "plantframes/frame_0" + this.plant + "_delay-0.04s.gif";
    } else if (this.plant < 60) {
      this.plantIMG = "plantframes/frame_" + this.plant + "_delay-0.04s.gif";
    } else {
      this.plant = 0;
    }
    console.log(this.plant);

    this.setState({ update: 0 });
  }

  render() {
    // None of this css works
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -75%)",
          backgroundColor: "palegoldenrod",
        }}
      >
        {/* <Image src={this.plantIMG} style = {{mixBlendMode: 'multiply', margin: 'auto', align: 'center'}}/> */}
        <img
          src={this.plantIMG}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            mixBlendMode: "multiply",
          }}
        />
      </div>
    );
  }
}
export default PlantGif;
