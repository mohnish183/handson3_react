import { Component } from "react";
import "./Formpage.css";
import FormData from "./FormData";
class Formpage extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Department: "",
      Rating: "",
      empData: [],
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const submitdataobj = {
      name: this.state.Name,
      department: this.state.Department,
      rating: this.state.Rating,
    };
    if (
      submitdataobj.name.length > 0 &&
      submitdataobj.department.length > 0 &&
      submitdataobj.rating.length > 0
    ) {
      this.state.empData.push(submitdataobj);
      this.setState({
        empData: this.state.empData,
        Name: " ",
        Department: " ",
        Rating: " ",
        pageDirect: false,
      });
      alert("successfully submited");
    } else {
      alert("Please fill the form !!!");
    }
  };
  redirect = () => {
    this.setState({
      pageDirect: !this.state.pageDirect,
    });
  };
  render() {
    return (
      <>
        <h1 className="heading">Employee Feeback Form !!!</h1>
        {this.state.pageDirect ? (
          <div className="form">
            <form>
              <label htmlFor="name">
                Name &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                value={this.state.Name}
                placeholder="Enter Your Name"
                onChange={this.onChange}
                required
              />
              <br />
              <br />
              <label htmlFor="department">Department :</label>
              <input
                type="text"
                id="department"
                name="Department"
                value={this.state.Department}
                placeholder="Enter Department Name"
                onChange={this.onChange}
                required
              />
              <br />
              <br />
              <label htmlFor="rating">
                Rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              </label>
              <input
                type="number"
                id="rating"
                name="Rating"
                value={this.state.Rating}
                placeholder="Give Rating"
                onChange={this.onChange}
                required
              />
              <br />
              <br />
              <br />
              <br />
              <button onClick={this.onSubmit}>Submit</button>
            </form>
          </div>
        ) : (
          <FormData value={this.state.empData} redirect={this.redirect} />
        )}
      </>
    );
  }
}

export default Formpage;
