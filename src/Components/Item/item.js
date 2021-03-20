import React from 'react';
import {
  Card, Button, CardTitle, CardText, CardBody
} from 'reactstrap';

import './item.css';



const Item = ({ data, onLike }) => {
  const elem = data.map(item => {

    return (
      <div key={item.id} className="container">
        <Card body border="none">
          <img className="img" src={item.img} alt={item.name} />
          <CardBody>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardText>{item.desc}</CardText>
            <Button color={item.like ? "warning" : "secondary"} onClick={() => onLike(item.id)}>{item.like ? "Избранное ✦" : "В избранное"}</Button>
          </CardBody>
        </Card>
      </div>
    )
  })

  return (
    <>
      { elem }
    </>
  )

}
export default Item;