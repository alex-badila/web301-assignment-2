import styled from 'styled-components';

// Styling for the card component
// The background colour of the card changes depending on the props
// color object that is passed in (options are: green, lavender, red, yellow, white (default))
const Card = styled.div`
    background-color: ${(props) => {
        if(props.color === "green")
        {
            return "green";
        }
        if(props.color === "lavender")
        {
            return "lavender";
        }
        if(props.color === "red")
        {
            return "red";
        }
        if(props.color === "yellow")
        {
            return "yellow";
        }
        return "white";
    }};
    padding: 30px;
    border-radius: 3px;
    border: 3px solid black;
`;

export default Card;