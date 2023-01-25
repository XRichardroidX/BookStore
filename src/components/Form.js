import React from 'react';

const Form = () => (
  <div>
    <form>
      <input type="text" name="title" id="title" placeholder="Add Book Title" />
      <select name="author" id="author">
        <option value="shakespear">Shakespear</option>
        <option value="arthur-c-d">Bill Nye</option>
        <option value="jk-rowling">Michio Kaku</option>
        <option value="jane-austin">Dr. Jordan Peterson</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default Form;
