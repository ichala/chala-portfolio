import React from 'react';
import { motion } from 'framer-motion';

const Search = ({ handleSearch, searchParams }) => (
  <motion.input
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onChange={handleSearch}
    value={searchParams.get('search') || ''}
    className="input input-primary input-md"
    type="text"
    name="s"
    id="s"
    placeholder="Search"
  />
);

export default Search;
