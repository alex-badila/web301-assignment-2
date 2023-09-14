import styled from 'styled-components';

// The styling for the Button component
// The background colour of the button changes depending on the props
// color object that is passed in (options are: green, salmon, blue (default))
const Button = styled.div`
    color: white;
    background-color: ${props => {
            if(props.color === "green")
            {
                return "green";
            }
            if(props.color === "salmon")
            {
                return "salmon";
            }
            return "blue";
        } 
    };
    border: 0;
    width: 300px;
    margin: auto;
    padding: 5px 9px;
    border-radius: 3px;
`;

export default Button;