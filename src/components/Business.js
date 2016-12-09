import React from 'react';
import Title from './Title';

const Business = ({business, titles, handleDelete}) => {
  const handleClick = () => {
    handleDelete(business.id)
  }

  const formatTurnover = val => {
    if(!val) {
      return '';
    }
    let count = 0;
    let formattedVal = val.toString().split('').reduceRight((a, b) => {
      if(count !== 0 && count % 3 === 0) a.push('.');
      count++;
      return [...a, b];
    }, []);

    return `$ ${formattedVal.reverse().join('')}`;
  }

  return (
    <li className="business-item">
      <div className="business-item--name">
        {business.business_name}
      </div>
      {titles.map(title => <Title key={title.color} {...title} />)}
      <div className="business-item--turnover">
        {formatTurnover(business.turnover)}
      </div>
      <button className="business-item--delete" onClick={handleClick}>&times;</button>
    </li>
  )
}

export default Business;
