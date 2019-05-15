import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Index = ({ user }) => {
  return <Fragment>
    <h1>{ `${user.profile.firstName} ${user.profile.lastName}` }</h1>
    <h2>Authorization header:</h2>
    <pre>{ `Bearer ${user.access_token}` }</pre>
  </Fragment>;
};

const mapStateToProps = ({ static: { user } }) => ({ user });
export default connect(mapStateToProps)(Index);
