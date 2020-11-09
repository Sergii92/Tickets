import React from 'react'
import styled from 'styled-components';

import img from '../../assets/img/img.png'


const SessionWrapper = styled.div`
border: 0px solid rgba(0, 0, 0, 0);
border-radius: 5px;
width:33%;
max-width:300px;
border:1px solid black;
padding: 20px;
text-align:center;
background-color:black;
color:white


`
const SessionImageBlock = styled.div`
width:95%;
background-image:url(${img});
background-position:center;
background-repeat:no-repeat;

border-radius:10px;
height:300px;
margin:0 auto;
background-color:#9d9d9d;
margin-bottom:10px;


`


 const Session = () => {
  return (
  <SessionWrapper> 
    <SessionImageBlock/> 
   <h2>SessionName</h2>
  <h3>SessionTime</h3>

  </SessionWrapper>
  )
}


export default Session