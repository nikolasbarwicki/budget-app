import React from 'react';
import NumberFormat from 'react-number-format';

class MyNumberInput extends React.Component {
  state = {
    value: 0,
  };

  render() {
    const { value } = this.state;

    return (
      <NumberFormat
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

export default MyNumberInput;
