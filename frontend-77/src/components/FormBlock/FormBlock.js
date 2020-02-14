import React, {Component} from 'react';
import style from './FormBlock.module.css';
import {publishComment} from "../../store/actions";
import {connect} from "react-redux";



class FormBlock extends Component {
  state = {
    author: '',
    message: '',
    image: ''
  };
  submitFormHandler = event => {
    event.preventDefault();

    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key]);
    });

    this.props.publishComment(formData);
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  };

  render() {
    return (
      <form onSubmit={this.submitFormHandler} className={style.form}>
        <li>
          <br/>
          <input type="text" name="author" onChange={this.inputChangeHandler}/>
        </li>
        <li>
          <br/>
          <textarea style={{width: '30%', padding: '10px', height: '200px',outline: 'none'}}
                    type="textarea" name="message" id='textarea'
                    onChange={this.inputChangeHandler}/>
        </li>
        <li>
          <input type="file" name='image' id='image' onChange={this.fileChangeHandler}/>
        </li>
        <button className={style.btn}>Add comment</button>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  publishComment: (data)=>dispatch(publishComment(data))
});
export default connect(null, mapDispatchToProps)(FormBlock);