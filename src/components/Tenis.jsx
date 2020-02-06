import React from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

export default class Tenis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {news: []}
  }

  componentDidMount() {
    axios.get('http://localhost:8080/tenis')
      .then(res => {
        const body = res.data;
        const $ = cheerio.load(body);
        const news = [];
        for (let i = 0; i < $('.liga-news-item-link').length; i++) {
          news.push($('.liga-news-item-link').eq(i).text());
        };
        this.setState({news});
      })
  }

  render() {
    if (this.state.news.length !== 0) {
      let news = this.state.news.map((news, key) => {
        return <div className="news-block" key={key}>
          <p>{news}</p>
        </div>
      });
    
      return (
        <>
        {news}
        </>
        );
    }
    return null;
  }
}