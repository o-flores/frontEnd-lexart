import React, { useEffect, useState } from 'react';
import DropDown from '../DropDown';
import SearchInput from '../SearchInput';
import productsCategories from '../../utils/categories';
import sitesList from '../../utils/webSites';
import SearchButton from '../SearchButton';
import ProductsList from '../ProductsList';
import { Box } from '@mui/system';

function Home() {
  const [category, setCategory] = useState("");
  const [webSite, setWebSite] = useState("");
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
  }, [])
  return (
    <>
      <Box sx={
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "30px 0 50px"
        }
      }>
        <Box>
          <DropDown
            categories={productsCategories.map(({ name }) => name)}
            name="Categorias" value={category}
            setValue={setCategory}
          />
          <DropDown
            categories={sitesList}
            name="Sites"
            value={webSite}
            setValue={setWebSite}
          />
        </Box>
        <Box>
          <SearchInput value={query} setValue={setQuery} />
          <SearchButton setProducts={setProducts} queries={{category, webSite, query}} />
        </Box>
      </Box>
      <ProductsList products={products} />
    </>
  );
}

export default Home;
