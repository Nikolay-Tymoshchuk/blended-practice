import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { ContactTable } from 'components/ContactTable';

export const HomeView = () => {
  return (
    <section>
      <h1>Home</h1>
      <ContactTable />
    </section>
  );
};
