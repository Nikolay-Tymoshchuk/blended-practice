import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { removeContact, changeContactStatus } from 'redux/contactsSlice';
import Avatar from 'react-avatar';
import styled from './index.module.scss';

export const ContactTable = () => {
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <table className={styled.table}>
      <thead className={styled.thead}>
        <tr>
          <th>№</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Option</th>
        </tr>
      </thead>
      {contacts && (
        <tbody>
          {contacts.map((contact, index) => {
            const { id, name, age, status, avatar } = contact;
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <Avatar name={avatar} round={true} size={30} />
                </td>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  {
                    <span onClick={() => dispatch(changeContactStatus(id))}>
                      {status === 'yes' ? 'online' : 'offline'}
                    </span>
                  }
                </td>
                <td>
                  {
                    <button
                      type="button"
                      onClick={() => dispatch(removeContact(id))}
                    >
                      Delete
                    </button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};
