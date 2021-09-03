import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button,Input,List } from 'antd'
import store from './store'
import { CHANGE_VALUE,ADD_VALUE } from './store/actionType'
import {changeValueAction} from './store/action'

const data=['妈妈桑']
export default class TodoList extends Component {
    constructor(props){
        super(props)
       console.log(store.getState()) 
       this.state=store.getState()
    //    订阅 
       store.subscribe(this.change)

    }
    change=()=>{
        this.setState(
            store.getState()
        )
    }
    add=()=>{
        const action={
            type:ADD_VALUE,
            value:"js"
        }
        store.dispatch(action)
    }
    changeValue=(e)=>{
         console.log(e.target.value)
        // const action={
        //      type:CHANGE_VALUE,
        //      value:e.target.value
        //  }
        const action=changeValueAction(e.target.value)
         store.dispatch(action)
    }
    render() {
        return (
            <div>
            <div>
          <Input placeholder={this.state.value} onChange={this.changeValue}>
          </Input>
          <Button onClick={this.add}>添加</Button>


            </div>
            <div>
                <List bordered 
                dataSource={this.state.list}
                renderItem={
                    item=>(
                        <List.Item>{item}</List.Item>
                    )
                }
                ></List>
            </div>

            </div>

         
        )
    }
}
