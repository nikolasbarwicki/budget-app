import React from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

const StyledInput = styled(NumberFormat)`
  padding-left: 1rem;
  width: 100%;
  height: 4rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;
  box-sizing: border-box;
`;

class NumberInput extends React.Component {
  state = {
    value: 0,
  };

  render() {
    const { value } = this.state;

    return (
      <StyledInput
        thousandSeparator
        prefix="$"
        decimalScale="2"
        // isNumericString={true}
        value={value}
        onValueChange={(vals) => this.setState({ value: vals.formattedValue })}
        {...this.props}
      />
    );
  }
}

export default NumberInput;
