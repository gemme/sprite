import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";


class Tile extends Component {

    static propTypes = {
        src: PropTypes.string.isRequired,
        tile: PropTypes.object.isRequired,
        state: PropTypes.number.isRequired,
        scale: PropTypes.number.isRequired
    };


    render(){
        const { src, tile, state, scale } = this.props;
        const left = tile.width * state;
        return (
            <Container
                width={tile.width}
                height={tile.height}
                scale={scale}
               >
                <Image src={src} left={left}/>
            </Container>
        );
    }

}


const Container = styled.div`
    background-color: ${({color}) => color};
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    overflow: hidden;
    transform: scale(${({scale}) => `${scale}, ${scale}`});
    transform-origin: top left;
`;

const Image = styled.img`
    transform: translate(-${({left}) => left}px, 0);
`;


export default Tile;