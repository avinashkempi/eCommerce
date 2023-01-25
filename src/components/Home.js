import './Home.css';
import * as React from 'react';
import Product from './product';

function Home() {
  const [listView, setListView] = React.useState(false);
  const handleClick = () => setListView(!listView);
  return (
    <section id='home' className=''>
      <div className='homeContainer container my-4'>
        <h1 className='homeContent'>
          Hello! Welcome to <span className='name'>E-Commerce</span>
        </h1>
      </div>
      <div className='view-change'><input onClick={handleClick} type='checkbox' /> <span>LIST VIEW</span></div>
      <h4 className='product-heading'> Product list</h4>
      <div className={listView ? "list-view" : "grid-view"}>
        <Product />
      </div>
    </section>
  );
}

export default Home;
