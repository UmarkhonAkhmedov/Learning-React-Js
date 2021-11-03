import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';
const reducer = (state, action) => {

}
const defaultState = {
  people: [],
  isModelOpen: true,
  modalContent: ''
}
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name){

    }else {

    }
  }

  return (
    <>
      {state.isModelOpen && <Modal modalContent={state.modalContent}/>}
      <form onSumbit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <button type="submit">add</button>
        </div>
      </form>
      {state.people.map((person)=>{
        return <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      })}
    </>
  );
};

export default Index;
