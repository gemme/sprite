import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import Tile from './Tile';


class Sprite extends Component {

    static staticProps = {
        src: PropTypes.string.isRequired,
        tile: PropTypes.object.isRequired,
        scale: PropTypes.number.isRequired
    };

    tick = 0;
    state = {
        state: 1
    };

    animate = () => {
        const {states, framesPerStep} = this.props;
        if (this.tick === framesPerStep) {
        this.tick = 0;
        this.setState((prev) => {
            return {
            state: (prev.state + 1) % states
            }
        });
        }
        this.tick += 1;
        requestAnimationFrame(this.animate);
    }

    componentDidMount(){
        this.animate();
    }

    componentWillUnmount(){
        cancelAnimationFrame(this.frame);
    }

    render(){
        const { src, tile, scale } = this.props;
        const { state } = this.state;
        return (
            <Tile
                src={src}
                tile={tile}
                scale={scale}
                state={state}/>
        );
    }

}

export default Sprite;