import React, { useState } from 'react';
import DropDown from '../DropDown';
import SearchInput from '../SearchInput';
import productsCategories from '../../utils/categories';
import sitesList from '../../utils/webSites';

function Home() {
  const [category, setCategory] = useState("");
  const [webSite, setWebSite] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div >
      <DropDown categories={productsCategories} name="Categorias" value={category} setValue={setCategory} />
      <DropDown categories={sitesList} name="Sites" value={webSite} setValue={setWebSite} />
      <SearchInput value={query} setValue={setQuery} />
    </div>
  );
}

export default Home;
