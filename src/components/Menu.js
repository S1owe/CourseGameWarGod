import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../styles/Menu.scss';
import background from '../img/background/menu1.jpg';

class FirstLvl extends Component {
    constructor (props) {
        super (props);
        this.state = {
            
        }
    }

    close = () => {
        document.location.href = "http://google.com";
    };

    render() {
        return (
            <div className="menu" style={{backgroundImage:`url(${background})`}}>
                <div className="menuBlack"></div>
                <h1>Menu</h1>
                <div className="menu_container">
                    <div className="item"><Link to={{ pathname: '/first_lvl' }}>Начать</Link></div>
                    <div className="item"><Link to={{ pathname: '/first_lvl' }}>Таблица результатов</Link></div>
                    <div className="item"><Link to={{ pathname: '/first_lvl' }}>Настройки</Link></div>
                    <div className="item"><a onClick={() => this.close()}>Выход</a></div>
                </div>
            </div>
        );
    }
}

export default FirstLvl;