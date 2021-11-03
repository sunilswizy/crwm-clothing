import styled from 'styled-components'

export const SignInOut = styled.div`
    width: 950px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    @media only screen and (max-width: 800px) {
        width:100vh;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`