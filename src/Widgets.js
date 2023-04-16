import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Wasi is back with a bang!", "Top News - 9099 Readers")}
      {newsArticle("Covid-19 New Cases", "Top News - 899 Readers")}
      {newsArticle("React and Redux is best", "Top News - 6599 Readers")} 
      {newsArticle("Tesla Launched New Car", "Top News - 939 Readers")}
      {newsArticle("Bitcoin down by 25%", "Top News - 624 Readers")}
      
    </div>
    

  );
}

export default Widgets