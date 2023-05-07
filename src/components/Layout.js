import { Component } from 'react'

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'space-between',
    },
    container: {
        width: '72em',
        
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout