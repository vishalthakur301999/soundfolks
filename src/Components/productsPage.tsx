import React, {Component} from 'react';
import Navigation from "./navigation";
import {Grid, Page} from "@geist-ui/core";
import ProductCard from "./productCard";

export default class ProductsPage extends Component{
    constructor({props}: { props: any }) {
        super(props)

        this.state = {
            productCards: []
        }
    }

    arrayToHtmlList(arrayData: []){
        return arrayData.map((user: any, i: number)=>{
            return(
                <li>{arrayData[i]}</li>
            );
        })
    }

    componentDidMount() {
        const config = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
        const promise = fetch("http://localhost:8000/headphones", config);
        const promise1 = promise.then((Response) => {
            return Response.json();
        });
        promise1.then(products => {
            const cardArray = products.map((user: any, i: number)=>{
                return(
                    <ProductCard
                        imageURL={products[i].image}
                        productName={products[i].brand+" "+ products[i].name}
                        productPrice={products[i].price}
                        productFeatures={this.arrayToHtmlList(products[i].features)}
                        productURL={products[i].url}/>
                );
            });
            this.setState({productCards:cardArray});
        })
    }

    render() {
        // @ts-ignore
        const {productCards} = this.state;
        return (
            <div>
                <div>
                    <Navigation activePage={"products"}/>
                    <Page>
                        <Page.Content>
                            <Grid.Container gap={2} justify="center" height="100px">
                                {productCards}
                            </Grid.Container>
                        </Page.Content>
                    </Page>
                </div>
            </div>
        );
    }
}

