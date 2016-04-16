import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import { connect } from 'react-redux';
import Spinner from '../Parts/Spinner';
import { listContactsRequest } from '../../actions/api';
import { Table, Thead, Th } from 'reactable';
import { Link } from 'react-router';

export const ListPage = ({ fetching, contacts }) => {
  if(fetching) return <div className='spinner-location'><Spinner /></div>;

  for(let i = 0; i < contacts.length; i++)
    contacts[i].link = <Link to={`/update/${contacts[i]._id}`}>{contacts[i].name}</Link>;

  return (
    <div>
      <Table
        sortable={true}
        defaultSort={{ column: '_id', direction: 'desc' }}
        noDataText='No matching records found.'
        itemsPerPage={10} pageButtonLimit={10}
        data={contacts}
        filterable={['link', 'email', 'phone']}
      >
        <Thead>
          <Th column='link'>
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
  dispatch(listContactsRequest());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(ListPage));
