import { Component } from 'react'

const styles = {
    detallesCarrito: {
        backgroundColor: '#fff',
        position: 'absolute',
        martinTop: '1.8em',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '18em',
        right: 50,
      },
      ul: {
        margin: 0,
        padding: 0
      },
      producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.6em 1.2em',
        borderBottom: 'solid 1px #AAA'
      }
}

class DetallesCarrito extends Component {
  render() {
    const {carrito} = this.props
    console.log(carrito)
    return (
      <div style={styles.detallesCarrito}>
        <ul style={styles.ul}>
            {carrito.map(x =>
              <li style={styles.producto} key={x.name}>
                <img alt={x.name} src={x.img} width='32' height='32' />
                {x.name} <span>{x.cantidad}</span>
              </li>)}
        </ul>
      </div>
    )
  }
}

export default DetallesCarrito