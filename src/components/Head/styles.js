import styled from 'styled-components';


export const HeaderBackground = styled.div`
position: relative;
background: url(${({ backgroundImage }) => backgroundImage}) 0 center / auto repeat-x scroll #eba4cb;
width: 100%;
height: 185px;
`

export const Logo = styled.div`
background: url(${({ sprite }) => sprite}) no-repeat -2px -167px;
`