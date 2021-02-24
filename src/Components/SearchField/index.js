import React, { useState } from 'react';
import './SearchField.css';
import i18n from '../../i18n';

const SearchField = ({ suggestions }) => {
  const [search, setSearch] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const Suggestions = () => {
    const handleSuggestionSelected = (e) => {
      setShowSuggestions(false);
      setSearch(e.currentTarget.innerText);
    }

    if (!showSuggestions || suggestions.length === 0 || filteredSuggestions.length === 0) {
      return null;
    }

    return (
      <ul className="Suggestion-list">
        {filteredSuggestions.map((suggestion, key) => (
          <li onClick={handleSuggestionSelected} key={key}>{suggestion}</li>
        ))}
      </ul>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const textInput = event.target.value;

    setShowSuggestions(textInput.length > 0);

    setSearch(event.target.value);

    const filteredSuggestions =
      suggestions.filter(suggestion => new RegExp(textInput, 'i').test(suggestion));

    setFilteredSuggestions(filteredSuggestions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="Search-field"
        onChange={handleChange}
        placeholder={i18n.searchField.search}
        value={search}
      />

      <Suggestions />
    </form>
  )
}

export default SearchField;
