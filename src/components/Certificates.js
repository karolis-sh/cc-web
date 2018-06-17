import React from 'react';
import Lightbox from 'react-images';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import { certificates } from '../data';

const baseUri = 'https://res.cloudinary.com/buzzard/image/upload/';
const thumbModification = 'c_thumb,w_200,g_face/';

const Img = styled.img`
  border: 1px solid gray;
  border-radius: 3px;
`;

class Certificates extends React.Component {
  state = { open: false, currentImage: 0 };

  onClose = () => this.setState({ open: false, currentImage: 0 });

  onOpen = index => this.setState({ open: true, currentImage: index });

  onChangeCurrentImage = index => {
    if (index < certificates.length && index > -1) {
      this.setState({ currentImage: index });
    }
  };

  render() {
    const { open, currentImage } = this.state;

    return (
      <React.Fragment>
        <div className="pt2 flex justify-center">
          {certificates.map((item, index) => (
            <LazyLoad key={item}>
              <Img
                src={`${baseUri + thumbModification + item}`}
                onClick={() => this.onOpen(index)}
                alt="certificate"
                className="mh2"
              />
            </LazyLoad>
          ))}
        </div>
        <Lightbox
          isOpen={open}
          images={certificates.map(item => ({ src: `${baseUri + item}` }))}
          currentImage={currentImage}
          onClose={this.onClose}
          onClickNext={() => this.onChangeCurrentImage(currentImage + 1)}
          onClickPrev={() => this.onChangeCurrentImage(currentImage - 1)}
        />
      </React.Fragment>
    );
  }
}
export default Certificates;
