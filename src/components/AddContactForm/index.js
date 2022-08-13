import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { getStatus } from 'helpers/getStatus';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const AddContactForm = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [age, setAge] = useLocalStorage('age', '');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'age':
        setAge(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      name,
      age,
      avatar: name,
      status: await getStatus(),
    };
    console.log('data :>> ', data);
    dispatch(addContact(data));
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={name}
          required
        />
      </label>
      <label>
        Age
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleChange}
          value={age}
          min="1"
          max="102"
          required
        />
      </label>
      <button type="submit"> Add contact</button>
    </form>
  );
};
