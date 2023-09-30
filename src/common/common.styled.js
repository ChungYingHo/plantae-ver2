import styled from "styled-components";

const colors = {
    darkGreen: '#4f6036',
    lightGreen: '#93b662',
    black: '#1d1612',
    darkGray: '#747474',
    lightGray: '#9b9b9b'
}

const fonts = {
    en: `'Josefin Sans',sans-serif`,
    ch: `'Noto Sans TC', sans-serif`
}

const Container = styled.div`
    /* outline: darkgray solid 2px; */
    width: 70%;
    height: 40vh;
    margin: 1.5rem auto 0.75rem;

    @media (max-width: 900px){
        width: 90%;
        height: fit-content;
    }
`

export {
    colors,
    fonts,
    Container
}