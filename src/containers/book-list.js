import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

const BookList = props => {
  const renderList = () => {
    return props.books.map(book => {
      return (
        <li 
          key={book.title} 
          className="list-group-item"
          onClick={() => props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  
  return (
    <ul className="list-group col-sm-4">
      {renderList()}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

