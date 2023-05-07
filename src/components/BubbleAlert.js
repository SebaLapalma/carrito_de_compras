import { Component } from 'react'

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '0.12em 0.6em',
        fontSize: '0.9em',
        width: '20px'
    }
}

class BubbleAlert extends Component {
    getNumber(n){
        if(!n){return('')}
        return n > 9 ? '9+' : n
    }

    render() {
        const {value} = this.props
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
            )
  }
}

export default BubbleAlert