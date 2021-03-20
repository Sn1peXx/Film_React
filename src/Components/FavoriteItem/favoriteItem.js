import React from 'react';
import { Badge, Button } from 'reactstrap';
import './favoriteItem.css';

const FavoriteItem = ({ liked, all, showLike, showAll }) => {
    return (
        <div className="favorite">
            <Button color="primary" outline onClick={() => showLike()}>
                Избранное: <Badge color="secondary">{liked}</Badge>
            </Button>
            <br />
            <br />
            <Button color="info" onClick={() => showAll()}>
                Все: <Badge color="secondary">{all}</Badge>
            </Button>
        </div>
    )
}

export default FavoriteItem;