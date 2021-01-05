import React, { Component } from 'react'
import '../App.css';

export default class User extends Component {

    constructor(props) {
        super(props)

        this.state = {
            editP: 'Invisible',
            nameValue: '',
            ageValue: '',
            cityValue: '',
            nameError: '',
            ageError: '',
            cityError: ''
        }

    }

    checkMaleOrFemale = (man) => {
        if (man) {
            return {
                en: 'man',
                he: 'בן'
            }
        }
        else {
            return {
                en: 'women',
                he: 'בת'
            }
        }
    }

    validNane = (e) => {

        let input = e.target.value

        if (input == '') {
            this.setState({ nameValue: '', nameError: '' })
        }
        else if (input.length < 5 && input.length > 0) {
            this.setState({ nameValue: '', nameError: 'שם חייבת להיות לפחות 5 תווים' })
        }
        else {
            this.setState({ nameValue: input, nameError: '' })
        }
    }

    validAge = (e) => {

        let input = e.target.value

        if (input == '') {
            this.setState({ ageValue: '', ageError: '' })
        }
        else if (isNaN(input)) {
            this.setState({ ageValue: '', ageError: 'גיל חייבת להיות מספר' })
        }
        else if (input < 18 && input > 0) {
            this.setState({ ageValue: '', ageError: 'אפשר להירשם רק מעל 18' })
        }
        else {
            this.setState({ ageValue: input, ageError: '' })
        }
    }

    validCity = (e) => {

        let input = e.target.value

        if (input == '') {
            this.setState({ cityValue: '', cityError: '' })
        }
        else if (input.length < 3 && input.length > 0) {
            this.setState({ cityValue: '', cityError: 'עיר חייבת להיות לפחות 3 תווים' })
        }
        else {
            this.setState({ cityValue: input, cityError: '' })
        }

    }

    changeDetails = () => {
        if (this.state.nameValue != '' && this.state.nameError == '') {
            this.props.changeName(this.state.nameValue, this.props.index)
        }

        if (this.state.ageValue != '' && this.state.ageError == '') {
            this.props.changeAge(this.state.ageValue, this.props.index)
        }

        if (this.state.cityValue != '' && this.state.cityError == '') {
            this.props.changeCity(this.state.cityValue, this.props.index)
        }

        document.getElementById('namEditInput').value = ''
        document.getElementById('ageEditInput').value = ''
        document.getElementById('cityEditInput').value = ''

        this.setState({
            editP: 'Invisible',
            nameValue: '',
            ageValue: '',
            cityValue: ''
        })
    }

    deleteUser = () => {
        this.setState(this.setState({ editP: 'Invisible' }))
        this.props.delete(this.props.index)
    }


    render() {
        return (

            <div id={'people'} className={this.checkMaleOrFemale(this.props.man).en}>

                <h1>{this.props.name}</h1>
                <h2>{
                    this.checkMaleOrFemale(this.props.man).he
                    + ' ' + this.props.age
                }</h2>
                <h2>{this.props.city}</h2>
                <button
                    className={this.checkMaleOrFemale(this.props.man).en + 'Button'}
                    onClick={() => { this.setState({ editP: 'visible' }) }}
                >ערוך פרטים</button>

                <div className={this.state.editP}
                    id={this.checkMaleOrFemale(this.props.man).en + 'Edit'}
                >
                    <input
                        id='namEditInput'
                        className={this.checkMaleOrFemale(this.props.man).en + 'Input'}
                        onChange={this.validNane}
                        placeholder="ערוך שם"
                    />
                    <div className='error'>{this.state.nameError}</div>
                    <input
                        id='ageEditInput'
                        className={this.checkMaleOrFemale(this.props.man).en + 'Input'}
                        onChange={this.validAge}
                        placeholder="ערוך גיל"
                    />
                    <div className='error'>{this.state.ageError}</div>
                    <input
                        id='cityEditInput'
                        className={this.checkMaleOrFemale(this.props.man).en + 'Input'}
                        onChange={this.validCity}
                        placeholder="ערוך עיר"
                    />
                    <div className='error'>{this.state.cityError}</div>
                    <button
                        className={this.checkMaleOrFemale(this.props.man).en + 'Button'}
                        onClick={this.changeDetails}
                    >סיום</button>
                    <button
                        className={this.checkMaleOrFemale(this.props.man).en + 'Button'}
                        onClick={this.deleteUser}
                    >מחק</button>
                </div>
            </div >
        )
    }
}
