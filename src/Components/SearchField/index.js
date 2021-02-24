import React, { useState } from 'react';
import './SearchField.css';
import i18n from '../../i18n';
import { filterArrayByText } from '../utils';

const PRESS_ENTER_CODE = 13;
const PRESS_DOWN_CODE = 40;
const PRESS_UP_CODE = 38;

const SearchField = ({ suggestions }) => {
  const [search, setSearch] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const Suggestions = () => {
    const handleSuggestionSelected = (event) => {
      setShowSuggestions(false);
      setSearch(event.currentTarget.innerText);
    }

    if (!showSuggestions || suggestions.length === 0 || filteredSuggestions.length === 0) {
      return null;
    }

    const classNameSuggestion = (key) => {
      if (activeSuggestion === key) {
        return 'Suggestion-active';
      }

      return null;
    };

    return (
      <ul className="Suggestion-list">
        {filteredSuggestions.map((suggestion, key) => (
          <li
            className={classNameSuggestion(key)}
            onClick={handleSuggestionSelected}
            key={key}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === PRESS_DOWN_CODE
      && activeSuggestion !== filteredSuggestions.length) {
      setActiveSuggestion(activeSuggestion + 1);
    }

    if (event.keyCode === PRESS_UP_CODE && activeSuggestion >= 0) {
      setActiveSuggestion(activeSuggestion - 1);
    }

    if (event.keyCode === PRESS_ENTER_CODE) {
      setShowSuggestions(false);
      const selectedSuggestion = filteredSuggestions[activeSuggestion];

      if (selectedSuggestion) {
        setSearch(selectedSuggestion);
      }
    }
  };

  const handleChange = (event) => {
    const textInput = event.target.value;

    setShowSuggestions(textInput.length > 0);

    setSearch(event.target.value);

    const filteredSuggestions = filterArrayByText({ array: suggestions, text: textInput });

    setFilteredSuggestions(filteredSuggestions);

    setActiveSuggestion(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onKeyDown={handleKeyDown}
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
