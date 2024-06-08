
import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';
import styled from 'styled-components';
function ShareButtons() {
  const shareUrl = 'https://google.com';
  const title = 'Check out this awesome website!';

  return (
    <div>
      <h4>Share this page:</h4>
      <Share className='share' >
        <FacebookShareButton url={shareUrl} quote={title} >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title} >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </Share>
    </div>
  );
}

export default ShareButtons;


export const Share = styled.div`
margin-bottom: 10px;
display: flex;
gap: 5px;
 

`;