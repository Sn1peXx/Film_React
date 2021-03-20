import React from 'react';
import Item from '../Item/item';

const ItemList = ({ data, onLike, like }) => {

    return (
        <Item data={data} onLike={onLike} like={like}/>
        
    );
}

export default ItemList;