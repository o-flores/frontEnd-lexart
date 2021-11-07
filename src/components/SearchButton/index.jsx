import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { fetchBuscapeApi, fetchMercadoLivreApi } from '../../utils/api';
import productsCategories from '../../utils/categories';

function SearchButton({ setProducts, queries }) {
  const { category, webSite, query } = queries;

  const handleSearchClick = async () => {
    let products;
    const payload = { category, webSite, query };
    if (webSite === 'Buscapé') {
      products = await fetchBuscapeApi(payload);
    } else {
      const categoryId = productsCategories.find(({ name }) => name === category).id;
      products = await fetchMercadoLivreApi(categoryId, payload);
    }
    setProducts(products);
  }
  return (
    <Button
      onClick={handleSearchClick}
      startIcon={<SearchIcon />}
      variant="secondary"
      size="large"
    >
      <Typography variant="body" fontSize="13px">
        Procurar
      </Typography>
    </Button>
  )
}

export default SearchButton;