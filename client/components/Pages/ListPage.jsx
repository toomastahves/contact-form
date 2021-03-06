import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import { connect } from 'react-redux';
import Spinner from '../Parts/Spinner';
import { listContactsRequest } from '../../actions/api';
import { Table, Thead, Th } from 'reactable';
import { Link } from 'react-router';

export const ListPage = ({ viewFetching, contacts, l10n }) => {
  if(viewFetching) return <div className='spinner-location'><Spinner /></div>;

  for(let i = 0; i < contacts.length; i++)
    contacts[i].link = <Link to={`/update/${contacts[i]._id}`}>{contacts[i].name}</Link>;

  return (
    <div>
      <Table
        className='pure-table pure-table-horizontal table-wrap'
        sortable={true}
        defaultSort={{ column: '_id', direction: 'desc' }}
        noDataText={l10n.NO_RECORDS}
        itemsPerPage={10} pageButtonLimit={10}
        data={contacts}
        filterable={['link', 'email', 'phone']}
      >
        <Thead>
          <Th column='link'>
            <strong className='name-header'>{l10n.NAME}</strong>
          </Th>
          <Th column='email'>
            <strong className='email-header'>{l10n.EMAIL}</strong>
          </Th>
          <Th column='phone'>
            <strong className='phone-header'>{l10n.PHONE}</strong>
          </Th>
        </Thead>
      </Table>
    </div>
  );
};

ListPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  viewFetching: PropTypes.bool.isRequired,
  l10n: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contactReducer.contacts,
    viewFetching: state.contactReducer.viewFetching,
    l10n: state.l10nReducer.l10n
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(listContactsRequest());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(ListPage));
