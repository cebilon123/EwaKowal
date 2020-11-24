import React from 'react'

function Text() {
    return null;
}

function Image() {
    return null;
}

class PersonInfo extends React.Component {
    static Text = Text
    static Image = Image

    render() {
        const { children } = this.props
        const text = children.find(child => child.type.name === 'Text')
        const image = children.find(child => child.type.name === 'Image')
        console.log(text)
        return (
            <div>
                PersonInfo reusable class
                {text ? text.props.children : null}
            </div>
        )
    }
}

export default PersonInfo;