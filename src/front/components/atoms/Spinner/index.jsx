import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const spin_reverse = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`;

const Spinner = styled.div`
  position: relative;
  border: 0.2em solid red;
  border-bottom-color: blue;
  border-radius: 50%;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  animation: ${props => props.reverse ? spin_reverse : spin} 1s linear infinite;
`;

Spinner.propTypes = {
    reverse: PropTypes.bool,
};

export default Spinner
