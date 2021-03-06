import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div style={{height: '100vh', position: 'relative'}}>
        <Layout style={{background: 'url(https://png.pngtree.com/thumb_back/fw800/back_pic/04/33/63/03584574ea93115.jpg) center / cover'}}>
          <Header transparent title={<Link style={{textDecoration: 'none', color: '#fff', fontFamily: 'Old Standard TT', fontSize: '42px'}} to="/" className="link">Rose's Chicken Farm</Link>} scroll>
            <Navigation>
                <Link className = "links" to="/products" style= {{fontFamily: 'Alegreya Sans SC', fontSize: '20px', color: '#fff'}}>Products</Link>
                <Link className = "links"  to="/mission" style= {{fontFamily: 'Alegreya Sans SC', fontSize: '20px', color: '#fff'}}>Our Story</Link>
                <Link className = "links"  to="/contact" style= {{fontFamily: 'Alegreya Sans SC', fontSize: '20px', color: '#fff'}}>Contact Us</Link>
            </Navigation>
          </Header>
        <Drawer>
            <Navigation>
                <Link to="/" style= {{fontFamily: 'Alegreya Sans SC', fontSize: '20px', color: 'black'}}>Home</Link>
                <Link to="/products" style= {{fontFamily: 'Alegreya Sans SC', fontSize: '20px', color: 'black'}}>Products</Link>
                <Link to="/mission" style= {{fontFamily: 'Alegreya Sans SC', fontSize: '20px', color: 'black'}}>Our Story</Link>
                <Link to="/contact" style= {{fontFamily: 'Alegreya Sans SC', fontSize: '20px', color: 'black'}}>Contact Us</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
            <Main />
        </Content>
    </Layout>
  </div>
    );
  }
}

export default App;
