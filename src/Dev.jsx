import React from 'react';

class Devs extends React.Component {
    render () {
        console.log(this.props)
        const {name, age, program, skills} = this.props
        return (
            <div className="dev">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Program: {program}</div>
                <div>Skills: {skills}</div>
            </div>
        )
    }
}

export default Devs;