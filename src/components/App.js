import React, { Component } from 'react'
import HelloMessage from './HelloMessage.jsx';
import User from './User.jsx'
import Edd from './Edd'
import '../App.css';

export default class App extends Component {

  state = {
    people: [
      {
        name: 'ישראל ישראלי',
        age: 18,
        city: 'ירושלים',
        man: true
      },
      {
        name: 'שרה שריהו',
        age: 40,
        city: 'תל אביב',
        man: false
      },
      {
        name: 'משה מושיקו',
        age: 30,
        city: 'רחובות',
        man: true
      },
      {
        name: 'רבקה רביקו',
        age: 29,
        city: 'קיסריה',
        man: false
      },
      {
        name: 'גל גילו',
        age: 26,
        city: 'טבריה',
        man: false
      },
      {
        name: 'מעיין מעיינות',
        age: 42,
        city: 'אשדוד',
        man: false
      },
      {
        name: 'אריה ארוביץ',
        age: 31,
        city: 'יפו',
        man: true
      },
      {
        name: 'אורי אריות',
        age: 50,
        city: 'נתניה',
        man: true
      }
    ]
  }

  changeName = (n, i) => {
    this.state.people.map((item, index) => {

      if (index == i) {

        this.setState(this.state.people[i] = {
          name: n,
          age: item.age,
          city: item.city,
          man: item.man
        })
      }
    })
  }

  changeAge = (n, i) => {
    this.state.people.map((item, index) => {

      if (index == i) {

        this.setState(this.state.people[i] = {
          name: item.name,
          age: n,
          city: item.city,
          man: item.man
        })
      }
    })
  }

  changeCity = (n, i) => {
    this.state.people.map((item, index) => {

      if (index == i) {

        this.setState(this.state.people[i] = {
          name: item.name,
          age: item.age,
          city: n,
          man: item.man
        })
      }
    })
  }

  deleteUser = (i) => {
    this.setState({ people: this.state.people.filter((item, index) => (index != i)) })
  }

  eddUser = (name, age, city, man) => {

    let newUser = { name: name, age: age, city: city, man: man }

    if (man == 'man') {
      newUser.man = true
    }
    else {
      newUser.man = false
    }

    this.setState({ people: [newUser, ...this.state.people] })
  }

  render() {
    return (
      <div className="App">
        <HelloMessage />
        {this.state.people.map((item, i) => {
          return (
            <User
              name={item.name}
              age={item.age}
              city={item.city}
              man={item.man}
              index={i}
              changeName={this.changeName}
              changeAge={this.changeAge}
              changeCity={this.changeCity}
              delete={this.deleteUser}
            />
          )
        })}

        <Edd
          addUser={this.addUser}
          eddUser={this.eddUser}
        />
      </div>
    )
  }
}
