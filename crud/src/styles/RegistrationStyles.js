import styled from 'styled-components';

const Wrapper = styled.div`
    background: #a49989;
    display: flex;
    width: 40%;
    align-items: center;
    margin: 0 auto;

    @media only screen and (max-width: 1024px) {
        width: 95%;
      }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 20px 0;
    align-items: center;
`;

const Input = styled.input`
    width: 80%;
    padding: 4px;
    margin: 10px;
    border: none;
    border-bottom: 3px solid #a5c3c6;
    color: #454245;
    font-size: 1.2rem;
    text-align: center;
`;

const Button = styled.button`
    padding: 5px;
    color: #e3e2e0;
    border-radius: 8px;
    border: 2px solid #e3e2e0;

    margin: 10px;
    height: 35px;
    display: flex;
    align-items: baseline;
    background-color: #454245;
    
    &:hover{
        background: #a5c3c6;
    }
`;

const Container = styled.div`
    background-color: lightblue;
    width:30%;
    border:.5px solid black;
`

const SubTitle = styled.p`
    color: white;
    font-size: 1.5rem;
`;
 const NavLink = styled.span`
    color: lightblue;
    `;


export {
    Wrapper,
    Form,
    Input,
    Button,
    Container,
    SubTitle,
    NavLink

}