import styled from 'styled-components';
import React from 'react';
import Tile from './Tile';

const StyledGun = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const Gun = ({top, left, state, tile, gun, scale}) => {
    return (
        <StyledGun top={top} left={left}>
          <Tile src={gun} state={state} tile={tile} scale={scale}/>
        </StyledGun>
    );
};


export default Gun;