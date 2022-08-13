import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    changeContactStatus: (state, { payload }) => {
      const index = state.contacts.findIndex(contact => contact.id === payload);
      state.contacts[index] = {
        ...state.contacts[index],
        status: state.contacts[index].status === 'yes' ? 'no' : 'yes',
      };
    },
  },
});

export const { addContact, removeContact, changeContactStatus } =
  contactSlice.actions;
export default contactSlice.reducer;
