import React from 'react';
import PropTypes from 'prop-types';

function Home(props) {
  const { auth } = props;
  return (
    <>
      <div>Home</div>
      {auth && <p>Logged in</p>}
    </>
  );
}

Home.propTypes = {};

export default Home;
