import { Component } from 'react'

const styles = {
    title: {
        marginBottom: '1.8em',
        right: 0
    }
}

class Title extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.title}>Tienda</h1>
            </div>
        )
    }
}

export default Title