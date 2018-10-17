import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject('userStore')
@observer
class Users extends React.Component {
  componentDidMount() {
    const { userStore } = this.props;
    userStore.fetchData();
  }

  render() {
    const { userStore } = this.props;
    return (
      <ul>
        {userStore.users.map(u => (
          <li key={u.id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    );
  }
}

Users.propTypes = {
  userStore: PropTypes.instanceOf(PropTypes.object),
};

export default Users;
