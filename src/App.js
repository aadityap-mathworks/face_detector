import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Logo from './components/Logo/Logo'
import InputBlock from './components/InputBlock/InputBlock'
import Particles from 'react-particles-js';
import FaceBlock from './components/FaceBlock/FaceBlock'
import Clarifai from 'clarifai'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'


const app = new Clarifai.App({
 apiKey: '37dfabc9ea4c4a17af02def7ddff5eac'
});

const initialState={
      input:'',
      url:'',
      box: '',
      route :'signin',
      user:{
          id:'',
          name:'',
          email: '',
          entries: 0,
          joined: ''
      }

}
const particleParams ={
  "particles": {
      "number": {
          "value": 200,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 7,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 2.5,
          "direction": "top",
          "out_mode": "out"
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 1,
              "opacity": 0.5
          },
          "repulse": {
              "distance": 200,
              "duration": 4
          }
      }
  }
}


class App extends Component {

  constructor(){
    super();
    this.state= initialState;
  }

  loadUser=(data)=>{
    this.setState({user: {
      id:data.id,
      name:data.name,
      email:data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }


  faceBoxPosition=(data)=>{
    console.log(data);
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
   return(
        {
        left : face.left_col * width,
        right : width - (face.right_col * width),
        top : face.top_row*height,
        bottom: height - (face.bottom_row * height)
      }
    );

  }

  faceBoxDisplay =(box) =>{
    this.setState({box:box});
  }

  onInput = (event) => {
      this.setState({input :event.target.value});
  }

  onSubmit =() =>{
    this.setState({url:this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response=> {
        this.faceBoxDisplay(this.faceBoxPosition(response))
      })
      .catch(err=> console.log(err));
  }

  onPageChange=(page)=>
  {
      if(page==='signin' || page==='signup')
      {
        this.setState(initialState);
      }
      this.setState ({route:page});
  }


  render() {
    return (
      <div className="App">
        <Particles className='particles'
            params={particleParams} 
        />
        <Navigation onPageChange={this.onPageChange} route={this.state.route}/>
          {this.state.route==='home'
            ? <div>
                <Logo />
                <InputBlock onInput = {this.onInput} onSubmit={this.onSubmit}/>

                <FaceBlock url={this.state.url} box={this.state.box}/>
              </div>
            :(
                this.state.route==='signin'
                ? <SignIn onPageChange ={this.onPageChange}/>
                : <SignUp onPageChange ={this.onPageChange} loadUser={this.loadUser}/>
              )
             
          }       
          
      </div>
    );
  }
}

export default App;
