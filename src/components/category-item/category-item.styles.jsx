import styled from 'styled-components'
const maxWidth='800px';
export const BackgroundImage = styled.div`
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        ${'' /* background-image: url(${({imageUrl}) => imageUrl}); */}

`
export const Body = styled.div`
        @media (max-width:${maxWidth}) {
        height: 60px;
        padding: 0 10px;
        }
        height: 90px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        background-color: white;
        opacity: 0.7;
        position: absolute;
        h2 {
        @media (max-width:${maxWidth}) {
            font-size: 16px;
        }
            font-weight: bold;
            margin: 0 6px 0;
            font-size: 22px;
            color: #4a4a4a;
            text-transform: uppercase;
        }

        p {
        @media (max-width:${maxWidth}) {
            font-size: 10px;
        }
            margin: 3px;
            font-weight: lighter;
            font-size: 14px;
        }
`

export const DirectoryItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    border-radius:5px ;
    -webkit-border-radius:5px ;
    -moz-border-radius:5px ;
    -ms-border-radius:5px ;
    -o-border-radius:5px ;
    &:hover {
        cursor: pointer;

        & ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            -webkit-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            -moz-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            -ms-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            -o-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${Body} {
            opacity: 0.9;
        }
    }
    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }
`
// .category-container {
//     min-width: 30%;
//     height: 240px;
//     flex: 1 1 auto;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid black;
//     margin: 0 7.5px 15px;
//     overflow: hidden;
//     border-radius:5px ;
//     -webkit-border-radius:5px ;
//     -moz-border-radius:5px ;
//     -ms-border-radius:5px ;
//     -o-border-radius:5px ;
//     &:hover {
//         cursor: pointer;

//         & .background-image {
//             transform: scale(1.1);
//             transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//             -webkit-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//             -moz-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//             -ms-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//             -o-transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
// }

//         & .category-body-container {
//             opacity: 0.9;
//         }
//     }

//     &.large {
//         height: 380px;
//     }

    // &:first-child {
    //     margin-right: 7.5px;
    // }

    // &:last-child {
    //     margin-left: 7.5px;
    // }

//     .background-image {
// width: 100%;
// height: 100%;
// background-size: cover;
// background-position: center;
//     }

//     .category-body-container {
// height: 90px;
// padding: 0 25px;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// border: 1px solid black;
// background-color: white;
// opacity: 0.7;
// position: absolute;

// h2 {
//     font-weight: bold;
//     margin: 0 6px 0;
//     font-size: 22px;
//     color: #4a4a4a;
// }

// p {
//     margin: 3px;
//     font-weight: lighter;
//     font-size: 14px;
// }
//     }
// }