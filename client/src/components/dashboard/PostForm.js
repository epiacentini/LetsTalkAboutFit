import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h2>Say Something...</h2>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          if (tags.length < 1) {
            console.log('hi');
            setTags(['k']);
          }
          console.log(tags);
          addPost({ text, tags });
          setText('');
          setTags('');
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="ta-ps"
        ></textarea>
        <input
          type="text"
          placeholder="Add tags when referring to specific exercises! (Click the tags to reveal information)"
          className="tags"
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <h5 className="nt">
          Note: Please Separate tags with commas and have exercises case
          sensitive to ones in the Exercises page
        </h5>
        <input type="submit" className="btn-dark btn-sb" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
