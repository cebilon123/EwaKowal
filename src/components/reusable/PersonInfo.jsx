import React from 'react'
import '../../styles/PersonInfo.css'

function Text() {
    return null;
}


class PersonInfo extends React.Component {
    static Text = Text

    render() {
        const isLeft = this.props.isLeft ? true : false

        return (
            <div className="PersonInfoBox">
                <div className="TextBox">
                    <div className="Text">
                        <div className={isLeft ? "ImageBox float__left" : "ImageBox float__right"}><img className={isLeft ? "Image__left" : "Image__right"} src={this.props.image} /> </div>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonInfo;