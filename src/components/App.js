import { useEffect, useState } from 'react';
import '../styles/App.css';
import './ItemList.js';
import ItemList from './ItemList.js';


function App() {

  const auctionItems = [
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      imageUrl: `https://picsum.photos/200/200`,
      description: 'This is a description of item 1'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 2'
    },
    {
      id: 3,
      name: 'Item 3',
      price: 300,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 3'
    },
    {
      id: 4,
      name: 'Item 4',
      price: 400,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 4'
    },
    {
      id: 5,
      name: 'Item 5',
      price: 500,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 5'
    },
    {
      id: 6,
      name: 'Item 6',
      price: 600,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 6'
    },
    {
      id: 7,
      name: 'Item 7',
      price: 700,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 7'
    },
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      imageUrl: `https://picsum.photos/200/200`,
      description: 'This is a description of item 1'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 2'
    },
    
    {
      id: 4,
      name: 'Item 4',
      price: 400,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 4'
    },
    {
      id: 5,
      name: 'Item 5',
      price: 500,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 5'
    },
    {
      id: 6,
      name: 'Item 6',
      price: 600,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 6'
    },
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      imageUrl: `https://picsum.photos/200/200`,
      description: 'This is a description of item 1'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 2'
    },
    {
      id: 3,
      name: 'Item 3',
      price: 300,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 3'
    },
    {
      id: 4,
      name: 'Item 4',
      price: 400,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 4'
    },
    {
      id: 5,
      name: 'Item 5',
      price: 500,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 5'
    },
    {
      id: 6,
      name: 'Item 6',
      price: 600,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 6'
    },
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      imageUrl: `https://picsum.photos/200/200`,
      description: 'This is a description of item 1'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 2'
    },
    {
      id: 3,
      name: 'Item 3',
      price: 300,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 3'
    },
    {
      id: 4,
      name: 'Item 4',
      price: 400,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 4'
    },
    {
      id: 5,
      name: 'Item 5',
      price: 500,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 5'
    },
    {
      id: 6,
      name: 'Item 6',
      price: 600,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 6'
    },
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      imageUrl: `https://picsum.photos/200/200`,
      description: 'This is a description of item 1'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 2'
    },
    {
      id: 3,
      name: 'Item 3',
      price: 300,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 3'
    },
    {
      id: 4,
      name: 'Item 4',
      price: 400,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 4'
    },
    {
      id: 5,
      name: 'Item 5',
      price: 500,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 5'
    },
    {
      id: 6,
      name: 'Item 6',
      price: 600,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 6'
    },
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      imageUrl: `https://picsum.photos/200/200`,
      description: 'This is a description of item 1'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 2'
    },
    {
      id: 3,
      name: 'Item 3',
      price: 300,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 3'
    },
    {
      id: 4,
      name: 'Item 4',
      price: 400,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 4'
    },
    {
      id: 5,
      name: 'Item 5',
      price: 500,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 5'
    },
    {
      id: 6,
      name: 'Item 6',
      price: 600,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 6'
    },
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      imageUrl: `https://picsum.photos/200/200`,
      description: 'This is a description of item 1'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 2'
    },
    {
      id: 3,
      name: 'Item 3',
      price: 300,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 3'
    },
    {
      id: 4,
      name: 'Item 4',
      price: 400,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 4'
    },
    {
      id: 5,
      name: 'Item 5',
      price: 500,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 5'
    },
    {
      id: 6,
      name: 'Item 6',
      price: 600,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'This is a description of item 6'
    }];

    const updatedAuctionItems = auctionItems.map(item => ({
      ...item,
      imageUrl: `https://picsum.photos/id/${item.id+10}/200/200`,
    }));

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    const itemsToLoad = updatedAuctionItems.slice(0, page * 20);
    setItems(itemsToLoad);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        setPage(page + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);
  
  
  return (<div>
  <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div class="div-1"><b>SUBASTA CERRADA</b></div>
  <div class="div-2"><b>Pujas finalizadas *</b></div>
  <div class="div-3" style={{ display: 'flex', justifyContent: 'space-between'  }}>
        <div class="div-3-n div-3-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ paddingTop: '11px' }}><b>23 Dic - 30 Dic</b></div>
          <div>Exposición de piezas</div>
          <div>i</div>
        </div>
        <div class="div-3-n div-3-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ paddingTop: '11px' }}><b>23 Dic - 01 Ene</b></div>
          <div>Aceptación de ofertas</div>
          <div>i</div>
        </div>
        <div class="div-3-n div-3-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ paddingTop: '11px' }}><b>02 Ene</b></div>
          <div>Subasta</div>
          <div>i</div>
        </div>
        <div class="div-3-n div-3-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ paddingTop: '11px' }}><b>04 Ene</b></div>
          <div>Adjudicación directa</div>
          <div>i</div>
        </div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>DEscarga el calendario de las proximas subastas</div>
        <div>Descarga el catalogo de la subasta</div>
  </div>
</div>

<ItemList auctionItems={items}/>

</div>

  );
}

export default App;
