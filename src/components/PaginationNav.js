import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './PaginationNav.css'
const PaginationNav = ({  totalPages }) => {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;
 
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  
    return (
      <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ul>
          {prevPage !== null && (
            <li>
              <Link to={`/page/${prevPage}`} className='link'>&larr;</Link>
            </li>
          )}
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={i + 1 === currentPage ? 'active' : ''}>
              <Link to={`/page/${i + 1}`} className='link'>{i + 1}</Link>
            </li>
          ))}
          {nextPage !== null && (
            <li>
              <Link to={`/page/${nextPage}`} className='link'>&rarr;</Link>
            </li>
          )}
        </ul>
      </div>
    );
  };

export default PaginationNav;
