// import React from 'react';

const PostNewContainer = React.createClass({

  mixins: [ReactMeteorData],
  
  getMeteorData() {

    return {
      categories: Categories.find().fetch(),
      postUrl: Session.get("postUrl")
    };
  },

  render() {
    ({PostNew} = Telescope.components);
    return <PostNew {...this.data} />;
  }

});

module.exports = PostNewContainer;