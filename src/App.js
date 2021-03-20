import './App.css';
import React from 'react';
import ItemList from './Components/ItemList/itemList';
import data from './films';
import FavoriteItem from './Components/FavoriteItem/favoriteItem';
import SearchPanel from './Components/SearchPanel/searchPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      all: data.length,
      term: ''
    }
  }

  // Нажатие на кнопке Like
  onLike = id => {
    this.setState(({data}) => {

      const index = data.findIndex(item => item.id === id);

      const old = data[index];
      const newItem = {...old, like: !old.like};

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
      return {
        data: newArr,
        datas: newArr
      }
    });
  }

  // Нажатие на кноку Избранное
  showLike = () => {
    this.setState(({data}) => {
      const liked = data.filter(item => item.like);
      const newItem = [...liked];

      if (newItem.length === 0) {
        return;
      }

      return {
        data: newItem
      }
    });
  }

  // Нажати на кнопку ВСЕ
  showAll = () => {
    this.setState(({datas, data}) => {
      const liked = data.filter(item => item.like);
      const newItem = [...liked];

      if (newItem.length === 0) {
        return;
      }

      return {
        data: datas
      }
    });
  }

  onUpdateSearch = term => {
    this.setState({ term })
  }

  searchPost = (term, items) => {
    if (term === 0) {
      console.log('ку');
      return items;
    }

    return items.filter(item => {
      const n = item.name.toLowerCase();
      return n.indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {

    const {data, all, term} = this.state;

    // Поиск кол-ва понравившихся фильмов
    const liked = data.filter(item => item.like).length;
    this.all = data.length;

    const visiblePosts = this.searchPost(term, data);

    return (
      <div className="App">
        <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
        <FavoriteItem liked={liked} all={all} showLike={this.showLike} showAll={this.showAll}/>
        <ItemList data={visiblePosts} onLike={this.onLike} like={data.like} />
      </div>
    );
  }
}