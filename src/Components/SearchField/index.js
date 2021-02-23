import React, { useState } from 'react';
import './SearchField.css';
import i18n from '../../i18n';

const SearchField = ({ suggestions }) => {
  const [search, setSearch] = useState('');
  // const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const Suggestions = () => {
    if (!showSuggestions) {
      return null;
    }

    return (
      suggestions.map((suggestion, key) => <div key={key}>{suggestion}</div>)
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeSearch = (event) => {
    const text = event.target.value;

    setShowSuggestions(text.length > 0);
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="Search-field"
        onChange={handleChangeSearch}
        placeholder={i18n.searchField.search}
        value={search}
      />

      <Suggestions />
    </form>
  )
}

export default SearchField;
