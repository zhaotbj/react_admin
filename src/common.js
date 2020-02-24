import React from 'react'
import { Row} from 'antd';
import Header from './components/Header'

const Common = (props)=>{
    return ( 
        <div>
            <Row>
            <Header menuType="second"></Header>
            </Row>
            <Row>
            {props.children}
            </Row>
        </div>
     )
}
 
export default Common;