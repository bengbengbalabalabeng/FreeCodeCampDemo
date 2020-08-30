import React from 'react';
import './App.css';

const QuoteAndAuthor = [
  {
    quote: "不经巨大的困难，不会有伟大的事业。",
    author: '伏尔泰'
  },
  {
    quote: "苦难磨炼一些人，也毁灭另一些人。",
    author: '富勒'
  },
  {
    quote: "改变你的想法，你就改变了自己的世界。",
    author: '文森特·皮尔'
  },
  {
    quote: "不要等待，时机永远不会恰到好处。",
    author: '拿破仑·希尔'
  },
  {
    quote: "生命如同寓言，其价值不在与长短，而在与内容。",
    author: '塞涅卡'
  },
  {
    quote: "生活的道路一旦选定，就要勇敢地走到底，决不回头。",
    author: '左拉'
  },
  {
    quote: "生命是一条艰险的峡谷，只有勇敢的人才能通过。",
    author: '米歇潘'
  },
  {
    quote: "要么你主宰生活，要么你被生活主宰。",
    author: '吉姆·罗恩'
  },
  {
    quote: "不幸可能成为通向幸福的桥梁。",
    author: '日本谚语'
  },
  {
    quote: "人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。1",
    author: '海贝尔1'
  },
  {
    quote: "人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。2",
    author: '海贝尔2'
  },
  {
    quote: "人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。3",
    author: '海贝尔3'
  },
  {
    quote: "人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。4",
    author: '海贝尔5'
  },
  {
    quote: "人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。5",
    author: '海贝尔5'
  },
  {
    quote: "人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。6",
    author: '海贝尔5'
  }
];

function App() {
  return (
    <QutoeBox />
  );
}

class QutoeBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currSelectedObj: QuoteAndAuthor[Math.floor(Math.random() * 15)]
    }
  }

  handerChange = () => {
    this.setState({currSelectedObj: QuoteAndAuthor[Math.floor(Math.random() * 15)]});
  }

  render() {
    return (
      <div id='quote-box'>
        <QutoeDiv quote={this.state.currSelectedObj.quote}/>
        <AuthorDiv author={this.state.currSelectedObj.author}/>
        <div style={{display: 'flex'}}>
        <TweetQuote />
        <NewQuote handerChange={this.handerChange}/>
        </div>
      </div>
    );
  }
}

class QutoeDiv extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div id="text">
        “{this.props.quote}”
      </div>
    );
  }
}

class AuthorDiv extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div id="author">
        -- {this.props.author}
      </div>
    );
  }
}

class NewQuote extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="new-quote" onClick={this.props.handerChange}>
        new-quote
      </div>
    );
  }
}
class TweetQuote extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className='tweet-quote'>
        <a id='tweet-quote' target="_blank" href='https://twitter.com/intent/tweet'>tweet-quote</a>
      </div>
    );
  }
}

export default App;
