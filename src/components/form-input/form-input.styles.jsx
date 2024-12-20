import styled, { css } from 'styled-components'
const subColor = 'gray';
const mainColor = 'black';
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`
export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${'' /* //TODO here is a way to check if the shrink is true (length is > 0 in form-input.component) */}
${({shrink})=> shrink && shrinkLabelStyles};

`
export const Input = styled.input`
    background: none;
    background-color: white;
    color: ${mainColor};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }
${'' /* // I want to make the label shrink when the input is focused that is the next sibling element to the input element */}
    &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
    }

`
export const Group = styled.div`
 position: relative;
 margin: 45px 0;
 input[type='password'] {
    letter-spacing: 0.3em;
  }
 `

// $sub-color: grey;
// $main-color: black;

// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }

// .group {
//   position: relative;
//   margin: 45px 0;

//   .form-input {
//     background: none;
//     background-color: white;
//     color: $main-color;
//     font-size: 16px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;
//     margin: 25px 0;

//     &:focus {
//       outline: none;
//     }
// // I want to make the label shrink when the input is focused that is the next sibling element to the input element
//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }

//   input[type='password'] {
//     letter-spacing: 0.3em;
//   }

//   .form-input-label {
    // color: $sub-color;
    // font-size: 16px;
    // font-weight: normal;
    // position: absolute;
    // pointer-events: none;
    // left: 5px;
    // top: 10px;
    // transition: 300ms ease all;

    // &.shrink {
    //   @include shrinkLabel();
    // }
//   }
// }
