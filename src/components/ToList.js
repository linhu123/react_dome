import React from 'react';

class ToList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:"",
            list:[]
        }
    }

    buttonClick1 = (e)=>{
        var tmpList = this.state.list;
        tmpList.push(this.refs.title.value);
        this.setState({
            list:tmpList
        });
        this.refs.title.value = "";
    }


    render(){
        return(
            <div>
                <h1>TodoList 演示</h1>

                <input ref = "title"/> <button onClick = {this.buttonClick1}>增加</button>
                <hr></hr>
                <ul>
                    {
                        this.state.list.map(function(value,key) {

                        return(
                            <li key={key}>{value}<button>删除</button></li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default ToList