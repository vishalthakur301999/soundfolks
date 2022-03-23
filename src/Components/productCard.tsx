import React from 'react';
import {Card, Grid, Image, Link, Text, Tooltip} from "@geist-ui/core";

function ProductCard(props: { imageURL: string; productName: string; productPrice: string; productFeatures: any; productURL: string }) {
    return (
        <Grid xs>
            <Card width="400px">
                <Image src={props.imageURL}
                       height="200px" width="400px" style={{paddingTop:"10px"}} draggable={false} />
                <Text h4 mb={0}>{props.productName}</Text>
                <Text type="secondary" small>{props.productPrice}</Text>
                <br/>
                <Tooltip text={props.productFeatures} placement="bottomStart"><Text small>Features</Text></Tooltip>
                <Card.Footer>
                    <Link block target="_blank" href={props.productURL}>Buy on Amazon.in</Link>
                </Card.Footer>
            </Card>
        </Grid>
    );
}

export default ProductCard;
