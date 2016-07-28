import React, { PropTypes } from 'react'
import Slider from './Slider.js';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';

let imgs=[img1,img2,img3,img4];

class App extends React.Component {

  render () {
      return(
        <div>
          <Slider imgList={imgs}/>
        </div>
      )
  }
}

export default App;
