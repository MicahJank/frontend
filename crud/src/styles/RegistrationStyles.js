import styled from 'styled-components';

const Header = styled.div`
    margin-top:3%;
    font-family: The Wild Hammers;
    padding: 1%;
    background-color: grey;
    border-bottom: 2px solid #454245;
    box-shadow: 5px 5px 5px black;
`

const Wrapper = styled.div`
    background: #a49989;
    display: flex;
    width: 50%;
    align-contents: center;
    margin: 0 auto;
    margin-top:3%;
    border-bottom: 2px solid #454245;
    box-shadow: 5px 5px 5px black;
    

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
    margin-left:20%;
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
    padding: 3px;
    color: #e3e2e0;
    border-radius:4px;
    border: 2px solid black;
    font-family:The Wild Hammers;

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
    background-color: grey;
    width:100%;
    border:.5px solid black;
    align-items:center;
`

const SubTitle = styled.p`
    color: black;
    font-size: 1.4rem;

`;
 const NavLink = styled.span`
    color: darkblue;
    `;


export {
    Header,
    Wrapper,
    Form,
    Input,
    Button,
    Container,
    SubTitle,
    NavLink

}