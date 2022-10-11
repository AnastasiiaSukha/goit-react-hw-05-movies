import styled from '@emotion/styled'

// export const SearchbarHeader = styled.div`
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   background-image:
//     linear-gradient(to right, #ba8b02, #181818);
//   color: #fff;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//   0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

export const SearchForm = styled.form`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  height:100%;
  max-width: 600px;
  background-color:#f6eabe;
  border-radius: 3px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`
export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  padding: 15px;
  background-image: linear-gradient(to right, #1e130c, #9a8478);
  background-repeat: no-repeat;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover{
    color:#faf0be ;
    opacity: 1;  
  }
`
export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
  `

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height:100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  background-color:#f6eabe;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder{
   font: inherit;
  font-size: 18px;   
  }
  `