import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import { connect } from 'react-redux';
import Spinner from '../Parts/Spinner';
import { listContactsRequest } from '../../actions/api';
import { Table, Thead, Th } from 'reactable';
import { Link } from 'react-router';

export const ListPage = ({ fetching, contacts }) => {
  if(fetching) return <div className='spinner-location'><Spinner /></div>;

  for(let i = 0; i < contacts.length; i++) {
    const url = <Link to={`/update/${contacts[i]._id}`}>{contacts[i].name}</Link>;
    contacts[i].name = url;
  }

  return (
    <div>
      <Table
        sortable={true}
        defaultSort={{ column: '_id', direction: 'desc' }}
        noDataText='No matching records found.'
        itemsPerPage={10} pageButtonLimit={10}
        data={contacts}
        filterable={['name', 'email', 'phone']}
      >
        <Thead>
          <Th column='name'>
            <strong className='name-header'>{'Name'}</strong>
          </Th>
          <Th column='email'>
            <strong className='email-header'>{'E-mail'}</strong>
          </Th>
          <Th column='phone'>
            <strong className='phone-header'>{'Phone'}</strong>
          </Th>
        </Thead>
      </Table>
    </div>
  );
};

ListPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contactReducer.contacts,
    fetching: state.contactReducer.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(listContactsRequest('get'));
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(ListPage));
