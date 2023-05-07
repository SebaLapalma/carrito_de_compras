import React, { Component } from 'react'
import Logo from './Logo'
import Carrito from './Carrito'

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '6em',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 3em',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
    }
}

class NavBar extends Component {
  render() {
    const {esCarritoVisible, mostrarCarrito} = this.props
    const {carrito} = this.props
    return (
        <nav style={styles.navbar}>
            <Logo />
            <Carrito 
             carrito={carrito}
             esCarritoVisible={esCarritoVisible}
             mostrarCarrito={mostrarCarrito}
            />
        </nav>
    )
  }
}

export default NavBar