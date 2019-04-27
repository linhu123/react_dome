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
            name:'linhu'
        }
    }

    render(){
        return(
            <div>
                <p>Home {this.state.name}</p>
                <div title = {this.state.name}>这里有title</div>
                <br/>
                <div className="red">这里有css</div>
                <br/>
                <label htmlFor="name">姓名</label>
                <input id = "name"></input>
            </div>
        )
    }
}

export default Home