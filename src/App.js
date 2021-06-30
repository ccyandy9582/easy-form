import logo from './logo.svg';
import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: 'andy', gender: 'M', food: ['rice', 'noodle'], fruit: 'apple', languages: ['English', 'Cantonese']}
  }
  nameOnChange = (event) => {
    this.setState({name: event.target.value})
  }
  genderOnChange = (event) => {
    this.setState({gender: event.target.value})
  }
  foodOnChange = (event) => {
    const {checked, value} = event.target
    let food = this.state.food
    // if checked and the food not exist in the food list, add it into the food lis, vice versa
    if (checked && food.indexOf(value) === -1)
      food.push(value)
    else
      food = food.filter(item => item!== value)

    this.setState({food: food})
  }
  fruitOnChange = (event) => {
    this.setState({fruit: event.target.value})
  }
  languagesOnChange = (event) => {
    let selected = []
    let options = event.target.options

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) 
        selected.push(options[i].value)
    }

    this.setState({languages: selected})
  }
  onSubmit = (event) => {
    alert('Name: '+this.state.name+
          '\nGender: '+this.state.gender+
          '\nFood: '+this.state.food+
          '\nFruit: '+this.state.fruit+
          '\nLanguages: '+this.state.languages)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <NameField onChange={this.nameOnChange} value={this.state.name}/>
          <GenderRadio onChange={this.genderOnChange} checked={this.state.gender} />
          <FoodCheckbox onChange={this.foodOnChange} food={this.state.food} />
          <FruitSigleSelect onChange={this.fruitOnChange} fruit={this.state.fruit} />
          <LanguagesMultipleSelect onChange={this.languagesOnChange} languages={this.state.languages}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

class NameField extends React.Component {
  render() {
    return (
      <div>
        <label>Name: </label>
        <input onChange={this.props.onChange} value={this.props.value}/>
      </div>
    )
  }
}

class GenderRadio extends React.Component {
  render() {
    return (
      <div>
        <label>Gender: </label>
        M<input 
          type='radio' 
          value='M' 
          checked={this.props.checked === 'M'} 
          onChange={this.props.onChange}/>
         F<input 
          type='radio' 
          value='F' 
          checked={this.props.checked === 'F'} 
          onChange={this.props.onChange}/>
      </div>
    )
  }
}

class FoodCheckbox extends React.Component {
  render() {
    return (
      <div>
        Food: <label>Sandwich
          <input 
            type='checkbox'
            value='sandwich'
            checked={this.props.food.indexOf('sandwich') !== -1}
            onChange={this.props.onChange}/>
        </label>
        <label>rice
          <input 
            type='checkbox'
            value='rice'
            checked={this.props.food.indexOf('rice') !== -1}
            onChange={this.props.onChange}/>
        </label>
        <label>noodle
          <input 
            type='checkbox'
            value='noodle'
            checked={this.props.food.indexOf('noodle') !== -1}
            onChange={this.props.onChange}/>
        </label>
      </div>
    )
  }
}

class FruitSigleSelect extends React.Component {
  render() {
    return (
      <div>
        Which is your favorite? <select value={this.props.fruit} onChange={this.props.onChange}>
          <option value='apple'>Apple</option>
          <option value='banana'>Banana</option>
          <option value='cherry'>Cherry</option>
        </select>
      </div>
    )
  }
}

class LanguagesMultipleSelect extends React.Component {
  render() {
    return (
      <div>
        How many language do you know? <select multiple={true} value={this.props.languages} onChange={this.props.onChange}>
          <option value='English'>English</option>
          <option value='Cantonese'>Cantonese</option>
          <option value='Japanese'>Japanese</option>
          <option value='1'>1</option>
        </select>
      </div>
    )
  }
}

function App() {
  return (
    <Form />
  )
}

export default App;
