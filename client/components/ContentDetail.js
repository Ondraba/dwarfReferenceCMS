import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchContentDetail from '../queries/fetchContentDetail';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui-icons/ThumbUp';



import AddComment from './AddComment';
import CommentList from './CommentList';


const ContentDetail = (props) => {
   const  _contentDetail  = props.data.contentDetail;

    if (!_contentDetail){
            return <div>Loading...</div>;
    }

   return(
     <div style={style.wrapperStyle}>
         <Link to="/Admin" style={style.linkStyle}>
            <RaisedButton label="Back" primary={true} type="submit"/>
         </Link>
        <Paper style={ style.paperStyle } zDepth={1} >
            <h1> {_contentDetail.title} </h1>
            <div>
                <p>{_contentDetail.title} </p>
                <p>{_contentDetail.main}</p>
                <p> {_contentDetail.header}</p>
                <p> {_contentDetail.footer}</p>
                <p> {_contentDetail.state}</p> 
                <p> {_contentDetail.ur}</p> 
            </div>
            <div style={style.underScore}>
                <span style={style.likeLabel}>0</span>
                <IconButton touch={true} style={style.likeButton} >
                    <ThumbUp />
                </IconButton>
            </div>
        </Paper>
        <CommentList commentsObj={_contentDetail.comments}/>
        <AddComment contentId={_contentDetail.id}/>
     </div>
   )
        
}


const style = {
  wrapperStyle: {
    paddingLeft: 20,
    paddingTop: 20
  },
  paperStyle: {
    height: 500,
    width: 800,
    margin: 20,
    paddingTop: 20,
    paddingLeft: 20
  },
  linkStyle: {
    margin: 20  
  },
  underScore: {
      marginTop: 200,
      width: 780,
      textAlign: 'right'
  },
  likeLabel: {
     
  },
  likeButton: {
    top: 3.5
  },
};


export default graphql(fetchContentDetail, {
    options: (props) => { 
        return { 
            variables: {id: props.params.id}
        }
    }
})(ContentDetail);

