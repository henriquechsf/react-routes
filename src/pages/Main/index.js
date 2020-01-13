import React, { Component } from 'react'
import './styles.css'

import api from '../../services/api';

export default class Main extends Component {
    state = {
        products: [],
    }

    // funcão de ciclo de vida que é carregada quando o componente é inicializado
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/products");

        this.setState({ products: response.data.docs })
    }

    render() {
        // destructuring para substituir o this.state.products do map
        const { products } = this.state;

        return (
            //<h1>Contagem de produtos: { this.state.products.length }</h1>
            <div className="product-list">
                { products.map(product => (
                    <article key={ product._id }>
                        <strong>{ product.title }</strong>
                        <p>{ product.description }</p>

                        <a href="">Acessar</a>
                    </article>
                )) }
            </div>
        )
    }
}