import React from 'react';

import './search-box.css';

export const SearchBox =props => (
    <input
    className='search-box'
    type='search'
    placeholder='고양이 이름을 검색해 보세요.'
    onChange={props.onSearchChange}
/>
    );