import React from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

const StyledInput = styled(NumberFormat)`
  height: 4rem;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: inherit;
  font-weight: ${(props) => props.theme.bold};
  color: inherit;
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
