import { Component } from 'react'
import Productos from './components/Productos'
import NavBar from './components/NavBar'
import Layout from './components/Layout'
import Title from './components/Title'

class App extends Component {
  state = {
    productos: [
      {
        name: 'Invictus',
        price: 6300,
        img: '/productos/invictus.jpg'
      },
      {
        name: 'Good Girl',
        price: 6300,
        img: '/productos/goodgirl.jpg'
      },
      {
        name: 'Bad Boy',
        price: 6300,
        img: '/productos/bad boy.jpg'
      },
      {
        name: '212 Party Fever',
        price: 7000,
        img: 'productos/212 party fever.jpg'
      },
    ],
    carrito: [],
    esCarritoVisible: false,
  }

  agregarAlCarrito = (producto) => {
    const {carrito} = this.state
    if (carrito.find( x => x.name === producto.name )){
      const newCarrito = carrito.map( x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({ carrito: newCarrito })
    }

    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto, 
        cantidad: 1,
      })
    })
  }

  mostrarCarrito = () => {
    if(!this.state.carrito.length){
      return
    }
    this.setState({esCarritoVisible: !this.state.esCarritoVisible})
  }

  render() {
    const {esCarritoVisible} = this.state
    return (
      <div>
        <NavBar
          carrito={this.state.carrito}
          esCarritoVisible={esCarritoVisible}
          mostrarCarrito={this.mostrarCarrito}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarrito = {this.agregarAlCarrito}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;