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
    setProducts(
      [{
        id: "MLB1962500187",
        title: "Apple iPhone SE (2a Geração) 64 Gb - Preto",
        price: 2599,
        description: "O iPhone SE é o iPhone de 4,7 polegadas mais poderoso (1). Ele vem com o chip A13 Bionic para um desempenho surpreendente em apps, jogos e fotos...",
        thumbnail: "http://http2.mlstatic.com/D_958906-MLA47681043218_092021-I.jpg",
        link: "https://www.mercadolivre.com.br/apple-iphone-se-2a-geraco-64-gb-preto/p/MLB15591331",
      },
      {
        id: "MLB1962500187",
        title: "Apple iPhone SE (2a Geração) 64 Gb - Preto",
        price: 2599,
        description: "O iPhone SE é o iPhone de 4,7 polegadas mais poderoso (1). Ele vem com o chip A13 Bionic para um desempenho surpreendente em apps, jogos e fotos...",
        thumbnail: "http://http2.mlstatic.com/D_958906-MLA47681043218_092021-I.jpg",
        link: "https://www.mercadolivre.com.br/apple-iphone-se-2a-geraco-64-gb-preto/p/MLB15591331",
      },
      {
        id: "MLB1962500187",
        title: "Apple iPhone SE (2a Geração) 64 Gb - Preto",
        price: 2599,
        description: "O iPhone SE é o iPhone de 4,7 polegadas mais poderoso (1). Ele vem com o chip A13 Bionic para um desempenho surpreendente em apps, jogos e fotos...",
        thumbnail: "http://http2.mlstatic.com/D_958906-MLA47681043218_092021-I.jpg",
        link: "https://www.mercadolivre.com.br/apple-iphone-se-2a-geraco-64-gb-preto/p/MLB15591331",
      },
      {
        id: "MLB1962500187",
        title: "Apple iPhone SE (2a Geração) 64 Gb - Preto",
        price: 2599,
        description: "O iPhone SE é o iPhone de 4,7 polegadas mais poderoso (1). Ele vem com o chip A13 Bionic para um desempenho surpreendente em apps, jogos e fotos...",
        thumbnail: "http://http2.mlstatic.com/D_958906-MLA47681043218_092021-I.jpg",
        link: "https://www.mercadolivre.com.br/apple-iphone-se-2a-geraco-64-gb-preto/p/MLB15591331",
      },
      {
        id: "MLB1962500187",
        title: "Apple iPhone SE (2a Geração) 64 Gb - Preto",
        price: 2599,
        description: "O iPhone SE é o iPhone de 4,7 polegadas mais poderoso (1). Ele vem com o chip A13 Bionic para um desempenho surpreendente em apps, jogos e fotos...",
        thumbnail: "http://http2.mlstatic.com/D_958906-MLA47681043218_092021-I.jpg",
        link: "https://www.mercadolivre.com.br/apple-iphone-se-2a-geraco-64-gb-preto/p/MLB15591331",
      },
      {
        id: "MLB1962500187",
        title: "Apple iPhone SE (2a Geração) 64 Gb - Preto",
        price: 2599,
        description: "O iPhone SE é o iPhone de 4,7 polegadas mais poderoso (1). Ele vem com o chip A13 Bionic para um desempenho surpreendente em apps, jogos e fotos...",
        thumbnail: "http://http2.mlstatic.com/D_958906-MLA47681043218_092021-I.jpg",
        link: "https://www.mercadolivre.com.br/apple-iphone-se-2a-geraco-64-gb-preto/p/MLB15591331",
      },
      ]
    )
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
          <DropDown categories={productsCategories} name="Categorias" value={category} setValue={setCategory} />
          <DropDown categories={sitesList} name="Sites" value={webSite} setValue={setWebSite} />
        </Box>
        <Box>
          <SearchInput value={query} setValue={setQuery} />
          <SearchButton />
        </Box>
      </Box>
      <ProductsList products={products} />
    </>
  );
}

export default Home;
