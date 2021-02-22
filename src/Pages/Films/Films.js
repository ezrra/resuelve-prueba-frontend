import React from 'react';
import Title from '../../Components/Title/Title';
import './Films.css';
import List from '../../Components/Films/List';

const Films = () => {
  return (
    <div className="Films-content-screen">
      <Title title="Films" />
      <List />
    </div>
  )
}

export default Films;
