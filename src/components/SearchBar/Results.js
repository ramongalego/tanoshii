import React from 'react';
import Loading from '../Loading';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Results = ({ location, history, navForm, data }) => {
  const goToAnimeDetailsPage = (id) => {
    let path = '';

    location.pathname.match(/anime\//g) 
      ? path = `${id}` 
      : path = `anime/${id}`;

    history.push({ pathname: path });
  }

  return (
    <div className={navForm ? 'nav-results' : 'results-container'}>
      {!data && <Loading />}
      
      {data &&
        data.map(data => {
          return (
            <div 
              key={data.mal_id} 
              className='results-item'
              onMouseDown={() => goToAnimeDetailsPage(data.mal_id)}>
              <img src={data.image_url} alt={data.title} />
              <div className='text-info'>
                <p>{data.title}</p>
                <p>{data.type}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

Results.propTypes = {
  data: PropTypes.array,
  navForm: PropTypes.bool
}

export default withRouter(Results);