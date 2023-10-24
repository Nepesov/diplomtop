import React, { Component } from 'react';

class RocketsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rockets: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://api.spacexdata.com/v3/rockets')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Ошибка при загрузке данных');
        }
      })
      .then(data => {
        this.setState({ rockets: data, isLoading: false });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  }

  render() {
    const { rockets, isLoading, error } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    }
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
    return (
      <div>
        {rockets.map((rocket, index) => (
          <div style={{width:'60%', display:'block' , margin:20 , fontFamily:'Montserrat' , background: 'rgba(123,115,207,0.2)' , color:'#fff',  float: index % 2 === 0 ? "left" : "right", 
          clear: 'both' , borderRadius:15  }} key={rocket.rocket_id}>
            <img  style={{width:'30%' , float:'left', borderRadius:15}} src={rocket.flickr_images[1]} alt="" />
            <div style={{textAlign:'center'}}>
            <h3>{rocket.rocket_name}</h3>
            <p>{rocket.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default RocketsAPI;
