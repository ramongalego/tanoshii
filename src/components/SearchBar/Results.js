import React, { Component } from 'react';
import Loading from '../Loading';
import { withRouter } from 'react-router-dom';

class Results extends Component {
  goToAnimeDetailsPage = (id) => {
    let path = '';

    this.props.location.pathname.match(/anime/g) ? 
    path = `${id}` : 
    path = `anime/${id}`;

    this.props.history.push({
      pathname: path
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className={this.props.navForm ? 'nav-results' : 'results-container'}>
        {!this.props.data && <Loading />}
        
        {this.props.data &&
          this.props.data.map(data => {
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
          })
        }
      </div>
    );
  }
}

export default withRouter(Results);