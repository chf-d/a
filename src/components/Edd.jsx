import React, { Component } from 'react'

export default class Edd extends Component {

    constructor(props) {
        super(props)

        this.state = {
            display: 'none',
            nameValue: '',
            ageValue: '',
            cityValue: '',
            selectValue: '',
            nameError: '',
            ageError: '',
            cityError: '',
            selectError: ''
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

    validSelect = (e) => {
        if (e.target.value == 0) {
            this.setState({ selectError: 'נא לבחור גבר או אישה' })
            this.setState({ selectValue: '' })
        }
        else if (e.target.value == 'man') {
            this.setState({ selectValue: 'man' })
        }
        else {
            this.setState({ selectValue: 'women' })
        }
    }

    openEddUser = () => {
        this.setState({ display: 'grid' })
    }

    eddUser = () => {
        if (
            this.state.nameError == '' &&
            this.state.ageError == '' &&
            this.state.cityError == '' &&
            this.state.selectValue != ''
        ) {
            this.props.eddUser(
                this.state.nameValue,
                this.state.ageValue,
                this.state.cityValue,
                this.state.selectValue
            )
            document.getElementById('nameInput').value = ''
            document.getElementById('ageInput').value = ''
            document.getElementById('cityInput').value = ''
            document.getElementById('eddSelect').value = '0'
            this.setState({
                display: 'none',
                nameValue: '',
                ageValue: '',
                cityValue: '',
                selectValue: ''
            })
        }
    }

    render() {
        return (
            <div>
                <button id="edd" onClick={this.openEddUser}>הוסף משתמש/ת</button>

                <div className='bg' style={{ display: this.state.display }}>
                    <div id={'eddUser'}>
                        <input
                            id='nameInput'
                            className={'eddInput'}
                            onChange={this.validNane}
                            placeholder="שם"
                        />
                        <div className='error'>{this.state.nameError}</div>
                        <input
                            id='ageInput'
                            className={'eddInput'}
                            onChange={this.validAge}
                            placeholder="גיל"
                        />
                        <div className='error'>{this.state.ageError}</div>
                        <input
                            id='cityInput'
                            className={'eddInput'}
                            onChange={this.validCity}
                            placeholder="עיר"
                        />
                        <div className='error'>{this.state.cityError}</div>
                        <select id="eddSelect" onChange={this.validSelect}>
                            <option value="0">גבר/אישה</option>
                            <option value="women">אישה</option>
                            <option value="man">גבר</option>
                        </select><br />
                        <div className='error'>{this.state.selectError}</div>
                        <button
                            className={'eddButton'}
                            onClick={this.eddUser}
                        >הוסף</button>
                    </div>
                </div>

            </div >
        )
    }
}
