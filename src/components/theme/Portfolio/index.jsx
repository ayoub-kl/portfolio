/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Gallery from 'react-grid-gallery';

import config from './config'
import {ImagesDiv} from './styles'
export default () => {

    let IMAGES= config.map((value,index) => {

        return {
              
            src: value.path,
            thumbnail: value.path,
            thumbnailWidth: 450,
            thumbnailHeight: 250,
            caption: value.description,
            tags: [{value: value.name, title: value.name},],
            
    }
    })
    
return (
<>
    <h4>Portfolio</h4>
    <h2>Recent projects</h2>

    <ImagesDiv>
    <Gallery images={IMAGES} backdropClosesModal={true}/>
    </ImagesDiv>
 


</>

)



}

