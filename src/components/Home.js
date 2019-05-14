//Home 组件
import React from 'react'
import '../assets/css/Home.css'

/**
 * 绑定属性需要注意：
 * class    换成 className
 * for      换成 htmlFor
 */
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'linhu',
            msg:"我是一个msg",
            message:'我是一个message',
            name:"我是一个name"
        };
        this.getMessage = this.getMessage.bind(this)
    }

    getMsg(){
        alert(this.state.msg);
    }
    getMessage(){
        alert(this.state.message);
    }
    getName = ()=>{
        alert(this.state.name);
    }
    setName = ()=>{
        this.setState({
            name:"asf1swd21w1w"
        })
    }
    convertName = (str)=>{
        this.setState({
            name:str
        })
    }
    run(){
        alert("我是一个run方法");
    }

    render(){
        return(
            <div>
                <p>Home {this.state.name}</p>
                <br></br>
                <p>Name:{this.state.name}</p>
                <div title = {this.state.name}>这里有title</div>
                <br/>
                <div className="red">这里有css</div>
                <br/>
                <label htmlFor="name">姓名</label>
                <input id = "name"></input>
                <br/>
                <br/>
                <button onClick = {this.run}>执行方法</button>
                <br/>
                <br/>
                {/* 调用方法的第一种写法 */}
                <button onClick = {this.getMsg.bind(this)}>getMsg</button>
                <br/>
                <br/>
                {/* 调用方法的第二种写法 */}
                <button onClick = {this.getMessage}>getMessage</button>
                <br/>
                <br/>
                <button onClick = {this.getName}>getName</button>
                <br/>
                <br/>
                <button onClick = {this.setName}>设置Name</button>
                <br/>
                <br/>
                <button onClick = {this.convertName.bind(this,"linhu")}>方法传值</button>
            </div>
        )
    }
}

export default Home