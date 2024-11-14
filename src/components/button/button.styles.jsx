import styled from "styled-components";

export const BaseButton = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
text-align: center;
font-size: 14px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: 1px solid black;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
-ms-border-radius: 5px;
-o-border-radius: 5px;
box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
&:hover {
background-color: white;
color: black;
border: 1px solid black;
}

&:active {
transform: translate(0, 2px);
}
`

export const GoogleSignInButton = styled(BaseButton)`
        border: none;
        background-color: #4285f4;
        color: white;

        &:hover {
            background-color: white;
            color: #357ae8;
            border: 1px solid #357ae8;
        }
`

export const SignOutButton = styled(BaseButton)`
        border: none;
        background-color: #f50000;
        color: white;

        &:hover {
            background-color: white;
        color: red;
        border: 1px solid red;
        }
`

export const InvertedButton = styled(BaseButton)`
        background-color: white;
        color: black;
        border: 1px solid black;

        &:hover {
            background-color: black;
            color: white;
            border: none;
        }
`


// .button-container {
//     min-width: 165px;
//     width: auto;
//     height: 50px;
//     letter-spacing: 0.5px;
//     line-height: 50px;
//     // padding: 0 35px 0 35px;
//     text-align: center;
//     font-size: 14px;
//     background-color: black;
//     color: white;
//     text-transform: uppercase;
//     font-family: 'Open Sans Condensed';
//     font-weight: bolder;
//     border: 1px solid black;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 5px;
//     -webkit-border-radius: 5px;
//     -moz-border-radius: 5px;
//     -ms-border-radius: 5px;
//     -o-border-radius: 5px;
//     box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
//     &:hover
// {
//         background-color: white;
//         color: black;
//         border: 1px solid black;
//     }

//     &:active {
//         transform: translate(0, 2px);

//     }

//     &.google-sign-in {
// border: none;
// background-color: #4285f4;
// color: white;

// &:hover {
//     background-color: white;
//     color: #357ae8;
//     border: 1px solid #357ae8;
// }
//     }
//     &.signout {
        // border: none;
        // background-color: #f50000;
        // color: white;

        // &:hover {
        //     background-color: white;
        // color: red;
        // border: 1px solid red;
        // }
//     }

//     &.inverted {
        // background-color: white;
        // color: black;
        // border: 1px solid black;

        // &:hover {
        //     background-color: black;
        //     color: white;
        //     border: none;
        // }
//     }
// }