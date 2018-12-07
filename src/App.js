import React, { Component } from 'react';
import './App.css';
import Sprite from './Sprite';
import styled from 'styled-components';
import Gun from './Gun';

class App extends Component {

  state = {
    code: null
  }

  componentWillMount(){
    document.addEventListener("keydown", e => {
      this.setState({code: e.code})
    });
  }

  getSprite(code) {

    let sprite;
    switch(code){
      case 'ArrowRight':
        sprite = './assets/diagdown.png';
      break;
      case 'ArrowLeft':
        sprite = './assets/1_side.png';
      break;
      case 'ArrowUp':
        sprite = './assets/1_north.png';
      break;
      case 'ArrowDown':
        sprite = './assets/1_south.png';
      break;
      default:
        sprite = './assets/1_side.png';
    }
    return <Sprite
            src={sprite}
            tile={{ width: 20, height: 24 }}
            scale={1.5}
            states={4}
            framesPerStep={10}
          />;
        }

        /* <Gun
          top={15}
          left={18}
          gun={'./assets/cannon_side.png'}
          state={0}
          tile={{ width: 17, height: 17 }}
          scale={1.5*2}
        /> */
  render() {
    console.log(this.state.code);
    return (
      <div className="App">
        <header className="App-header">
        <Container>
        <Gun
          top={15}
          left={18}
          gun={'./assets/cannon_side.png'}
          state={0}
          tile={{ width: 17, height: 17 }}
          scale={1.5}
        />
        {this.getSprite(this.state.code)}
        </Container>
        </header>

      </div>
    );
  }
}

const Container = styled.div`
  position: relative;
`;

export default App;
