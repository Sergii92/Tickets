import React from 'react'
import styled from 'styled-components';

import Session from '../../components/Session/Session'

const MainPageWrapper = styled.div`
display:flex;
flex-wpar:wrap;
max-width:1200px;
background-color: black;
position:relative;
left:50%;
transform:translateX(-50%)
`


const MainPage = ()=>{
  return(
<MainPageWrapper>
  <Session/>
</MainPageWrapper>
  )
}

export default MainPage