import React from 'react';


export default class SearchResults extends React.Component {


  render() {

    return (
      <div>
        {this.props.results.map(result => {
          return (
            <div key={result.id}>
              <p>{result.name}, {result.location.address1}</p>
            </div>
          )
        })

        }


      </div>
    )
  }
}
