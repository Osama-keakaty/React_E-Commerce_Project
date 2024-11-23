import styled from 'styled-components'
import { Link } from 'react-router-dom'
const minwidth= 568;
export const NavigationContainer = styled.div`
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
 height: 100%;
 width: 70px;
 padding: 10px;
`

export const NavLinks = styled.div`
@media (max-width: ${minwidth}px) {
  width:60%;

  }
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 8px;
`

export const NavLink = styled(Link)`
@media (max-width: ${minwidth}px) {
font-size:14px;
width:200px;
padding:5px;
}
width: fit-content;
display: flex;
flex-wrap:wrap; 
justify-content:center; 
padding: 10px 15px;
cursor: pointer;
position: relative;
transition: 0.3s;
-webkit-transition: 0.3s;
-moz-transition: 0.3s;
-ms-transition: 0.3s;
-o-transition: 0.3s;
border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
-ms-border-radius: 5px;
-o-border-radius: 5px;
&:hover {
 scale: 1.1;
 box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

}

 &:active {
   scale: 1;
   box-shadow: none;
 }
`
// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     gap: 8px;

//     .nav-link {
//       width: fit-content;
//       padding: 10px 15px;
//       cursor: pointer;
//       position: relative;
//       transition: 0.3s;
//       -webkit-transition: 0.3s;
//       -moz-transition: 0.3s;
//       -ms-transition: 0.3s;
//       -o-transition: 0.3s;
//       border-radius: 5px;
//       -webkit-border-radius: 5px;
//       -moz-border-radius: 5px;
//       -ms-border-radius: 5px;
//       -o-border-radius: 5px;

//       &:hover {
//         scale: 1.1;
//         box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

//       }

//       &:active {
//         scale: 1;
//         box-shadow: none;
//       }
//     }
//   }
// }