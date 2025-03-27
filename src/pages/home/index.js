import React from "react";
import {getUser} from "../../utils/http";
import '../../utils/mock.js';

class Home extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>Home</div>
    )
  }
  componentDidMount() {
    getUser().then(res => {
      console.log(res)
    })
  }
}
export default Home;