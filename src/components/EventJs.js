import React from "react"

class EventJs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg:"我是一个Event.js组件"
        }
    }

    // inputChange = (e)=>{
    //     console.log(e.target.value);
    //     let str = e.target.value;
    //     this.setState({
    //         msg:str
    //     })
    // }
	//jaslkdjio
    inputChange = ()=>{
        let temp = this.refs.username.value;
        this.setState({
            msg:temp
        })
    }

    buttonClick = ()=>{
        alert(this.state.msg);
    }


    keyUp = (e)=>{
        //alert(e)
        console.log(e.keyCode)
    }

    buttonClick2 = ()=>{
        
    }

    render(){
        return(
            <div>
                {this.state.msg}

                <h2>事件对象演示</h2>

                <input ref = "username" onChange = {this.inputChange} /><button onClick = {this.buttonClick}>事件对象</button>

                <hr></hr>
                <hr></hr>
                <br></br>
                <input onKeyUp = {this.keyUp}/><button onClick = {this.buttonClick2}>键盘事件</button>
             </div>
        )
    }

}

export default EventJs