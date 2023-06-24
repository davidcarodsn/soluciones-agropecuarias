import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import product from 'src/pages/products/[product].astro';
import type { CatalogData } from 'src/util/types';

interface SearcherComponentProps {
  setCatalogData: Dispatch<SetStateAction<CatalogData[] | undefined>>,
  allData: CatalogData[]
}

export const SearcherComponent:FC<SearcherComponentProps> = ({ setCatalogData, allData }) => {
  const [ input, setInput ] = useState<string>('');

  const hanldeInputChange = (e: any) => {
    const search = e.target.value;
    const filter = allData.filter( product => product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    
    search.length ? setCatalogData(filter) : setCatalogData(allData);
    setInput(search)
  }

  return (
    <div className="widget widget-search">
        <div className="widget-header">
            <h5>Buscar</h5>
        </div>
        <form action="/" className="search-wrapper">
            <input type="text" name="search" placeholder="Que está buscando?" value={input} onChange={hanldeInputChange}/>
            <button type="button"><i className="icofont-search-2"></i></button>
        </form>
    </div>
  )
}
