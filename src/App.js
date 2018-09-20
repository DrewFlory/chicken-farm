import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div style={{height: '100vh', position: 'relative'}}>
        <Layout style={{background: 'url(https://png.pngtree.com/thumb_back/fw800/back_pic/04/33/63/03584574ea93115.jpg) center / cover'}}>
          <Header transparent title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Gruppo', fontSize: '36px'}} to="/" className="link">Rosie's Chicken Farm</Link>} scroll>
            <Navigation>
                <Link to="/products" style= {{fontFamily: 'Gruppo', fontSize: '24px', color: 'white'}}>Products</Link>
                <Link to="/mission" style= {{fontFamily: 'Gruppo', fontSize: '24px', color: 'white'}}>Our Story</Link>
                <Link to="/contact" style= {{fontFamily: 'Gruppo', fontSize: '24px', color: 'white'}}>Contact Us</Link>
            </Navigation>
          </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/products">Products</Link>
                <Link to="/mission">Our Story</Link>
                <Link to="/contact">Contact Us</Link>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
  </div>
    );
  }
}

export default App;
