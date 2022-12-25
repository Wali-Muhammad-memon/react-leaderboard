import React from "react";




class StudentDetail extends React.Component {

 constructor(props){
    super(props);
    this.state = {
        score:0,
        success:'',
    }
 }   

 componentDidMount(){
    this.setState({
        score:this.props.score
    });
 }

 addScore(){
    this.setState({
        score:this.state.score + 1
    },
    () => {
        if(this.state.score === 370){
            this.setState({
                success: true,
            });     
           }
    }
    );
 }


 subScore(){
    this.setState({
        score:this.state.score - 1
    },
    () => {
        if(this.state.score < 50){
            this.setState({
                success: false,
            });     
           }
    }
    );
 }


 render(){

    const isSuccess = this.state.success;
    let text;

    if(isSuccess){
        text = <span>success</span>
    }else if(isSuccess === false){
        text = <span style={{backgroundColor: 'red', color: 'white'}}>Failed</span>
    }else{
        text = <span style={{backgroundColor: 'orange', color: 'white'}}>Progress</span>
    }

    return (
        <div className="student_detail">
            <div className="student_info">
                <h5 className="student_name">{this.props.name}
                <button className="counterbtn" onClick={() => this.addScore()}>+</button>
                <button className="subbtn" onClick={() => this.subScore()}>-</button>
                </h5>
                <p className="student_inst">{this.props.institute} &nbsp;
                {text}
                </p>
            </div>
            <div className="student_score">
                <h5 className="student_ts">{this.state.score}</h5>
            </div>
        </div>
    )
 }
}

export default StudentDetail