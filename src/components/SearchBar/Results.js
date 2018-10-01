import React, { Component } from 'react';
import Loading from '../Loading';
import { withRouter } from 'react-router-dom';

class Results extends Component {
  goToAnimeDetailsPage = (id) => {
    this.props.history.push({
      pathname: `anime/${id}`
    });
  }

  render() {
    if (!this.props.data) {
      return <Loading />;
    }

    return (
      <div className='results-container'>
        {this.props.data.map(data => {
          return (
            <div 
              key={data.mal_id} 
              className='results-item'
              onClick={() => this.goToAnimeDetailsPage(data.mal_id)}>
              <img src={data.image_url} alt={data.title} />
              <div className='text-info'>
                <p>{data.title}</p>
                <p>{data.type}</p>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}

export default withRouter(Results);