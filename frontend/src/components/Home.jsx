import React from 'react';

import Terminal from './terminal/Terminal'
import Inventory from './inventory/Inventory';

import "./styles/home.css"

function Home(props) {
    return (
        <div>
            <div>
                <div className="container home">
                    <div className="row">
                        <div className="col-5">
                        <Inventory />
                        </div>
                        <div className="col">
                        <Terminal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;