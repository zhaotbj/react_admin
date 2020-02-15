import React, { Component } from 'react';
import { Link} from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <ul>
                    <li>
                        <Link to="/">main</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/topics">topics</Link>
                    </li>
                    <li>
                        <Link to="/user">两层嵌套路由==/user==</Link>
                    </li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
 
export default Home;