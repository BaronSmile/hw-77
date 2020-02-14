import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchComments} from "../../store/actions";
import FormBlock from "../../components/FormBlock/FormBlock";

import style from './CommentsBlock.module.css';

class CommentsBlock extends Component {

  componentDidMount() {
    this.props.fetchComments();
  };

  render() {
    if (!this.props.comments) {
      return <div>Loading...</div>
    }

    return (

      <Fragment>
        <div>
          {this.props.comments.map(item => {
            let image = null;
            if (item.image && item.image !== "null") {
              image = <img style={{width:'200px'}} src={'http://localhost:8000/uploads/' + item.image} alt="img"/>;
            }

            return <div key={item.id} className={style.messageBlock}>
              {image}
              <div>
                <h5 className={style.author}>{item.author || 'Anonymous'}</h5>
                <p className={style.message}>{item.message}</p>
                <span className={style.inDate}>{new Date().toDateString()}</span>
              </div>
            </div>
          })
          }
        </div>

        <FormBlock/>
      </Fragment>
    );
  }
}

const mapStateToProps = state =>({
    comments: state.comments
});

const mapDispatchToProps = dispatch =>( {
    fetchComments: () => dispatch(fetchComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsBlock);