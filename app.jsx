class QuoteDiv extends React.Component{
    
    constructor (props){
        super(props);
        this.state = {
            isLoaded: false,
            quote: null,
            author: ''
        }
        //this.getJSONData = this.getJSONData.bind(this);
    }
    async componentDidMount() {
       this.getJSONData();
      }

      async getJSONData() {
        const url = `https://type.fit/api/quotes`;

    const response =await fetch(url);
    const responseJson =  await response.json();

    if (responseJson){
        let Rquote =responseJson[Math.floor(Math.random()*1643)]
      this.setState(
        {
            isLoaded: true,
            quote: Rquote.text,
            author: Rquote.author 
        }
      );
    }
    }
     
    render () {
        let tweet_url =`https://twitter.com/intent/tweet?text=`+this.state.quote;
        return(
            <div className="card-body" id="quote-box">
                
                <div className="card-body" >
                    <h3 className="card-title" id="text" >&ldquo;{this.state.quote}&rdquo; &mdash; </h3>
                    <h6 className="card-subtitle mb-2 text-muted" id="author">{this.state.author}</h6>
                    <div className="row">
                    <a id="tweet-quote" target="_blank" href={tweet_url} className="btn btn-primary"><i className="fa fa-twitter"></i></a>
                    <button id="new-quote" className="btn btn-primary right" onClick={()=>{this.getJSONData()}}>New quote</button>
                    </div>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <QuoteDiv/>
);