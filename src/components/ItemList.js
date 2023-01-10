import { useEffect, useState } from 'react';
import '../styles/App.css';

function ItemList({ auctionItems }) {
  const itemElements = auctionItems.map(item => (
    <div key={item.id} style={{ display: 'flex', flexDirection: 'column',  width: '23%', margin: '1%' }}>
      <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '100%' }} />
      <h3 style={{ textAlign: 'left' }}>{item.name}</h3>
      <div style={{ textAlign: 'left' }}>{item.description}</div>
      <div style={{ textAlign: 'left' }}>{item.price}</div>
    </div>
  ));

  return (
    <div className="itemlist" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {itemElements}
    </div>
  );
}

export default ItemList;