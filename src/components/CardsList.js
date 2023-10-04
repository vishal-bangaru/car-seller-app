import React from 'react';
import Cards from './Cards';
import { useParams } from 'react-router-dom';
import './CardsList.css'
const CardsList = ({ items, searchQuery}) => {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;
  const ITEMS_PER_PAGE = 6;
  const TOTAL_ITEMS = 60;
  // Filter data based on the searchQuery and car name
  const filteredItems = items.filter((item) =>
    item.car.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the items for the current page
  const itemsToShow = filteredItems.slice(startIndex, endIndex);
   
  return (
    <div className="card-container">
      {itemsToShow.map((item, index) => (
        <Cards key={index} item={item} />
      ))}
    </div>
  );
};


export default CardsList;
