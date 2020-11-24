import React from 'react'
import '../../styles/PersonInfo.css'

function Text() {
    return null;
}


class PersonInfo extends React.Component {
    static Text = Text

    render() {
        return (
            <div className="PersonInfoBox">
                <div className="TextBox">
                    <div className="Text">
                        <div><img className="Image" src={this.props.image} /> </div>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonInfo;