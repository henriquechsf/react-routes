import React, { Component } from 'react'
import './styles.css'

import api from '../../services/api';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    // funcão de ciclo de vida que é carregada quando o componente é inicializado
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data

        this.setState({ products: docs, productInfo: productInfo, page: page })
    }

    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        // destructuring para substituir o this.state.products do map
        const { products, page, productInfo } = this.state;

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

                <div className="actions">
                    <button disabled={ page === 1 } onClick={ this.prevPage }>Anterior</button>
                    <button disabled={ page === productInfo.pages } onClick={ this.nextPage }>Próxima</button>
                </div>
            </div>
        )
    }
}