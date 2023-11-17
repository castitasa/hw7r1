import React, { Component } from 'react';

class Calculator extends Component {
 constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      result: ''
    };
 }

 handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
 }

 calculateResult = (op) => {
    const num1 = parseFloat(this.state.number1);
    const num2 = parseFloat(this.state.number2);
    let result;
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '^':
        result = Math.pow(num1, num2);
        break;
      case 'sqrt':
        result = Math.sqrt(num1);
        break;
      default:
        result = 'Invalid operation';
    }
    this.setState({ result });
 }

 render() {
    return (
      <div>
        <input type="number" name="number1" value={this.state.number1} onChange={this.handleChange} />
        <input type="number" name="number2" value={this.state.number2} onChange={this.handleChange} />
        <button onClick={() => this.calculateResult('+')}>+</button>
        <button onClick={() => this.calculateResult('-')}>-</button>
        <button onClick={() => this.calculateResult('*')}>*</button>
        <button onClick={() => this.calculateResult('/')}>/</button>
        <button onClick={() => this.calculateResult('^')}>степень</button>
        <button onClick={() => this.calculateResult('sqrt')}>корень</button>
        <p>Result: {this.state.result}</p>
      </div>
    );
 }
}

export default Calculator;  