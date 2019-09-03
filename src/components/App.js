import React, { Component } from 'react';

import './App.less';

class App extends Component {
    state = {
        filter: '',
        data: []
    }

    componentDidMount() {
        const data = this.fetchData();
        this.setState({ data: data });
    }

    fetchData() {
        return [
            {
                name: "Jhon Doe",
                email: "jhondoe@gmail.com",
                position: "Front End Developer"
            },
            {
                name: "Emil George",
                email: "emilg@gmail.com",
                position: "Python Developer"
            },
            {
                name: "Mary Kom",
                email: "maryk@gmail.com",
                position: "UX Designer"
            },
            {
                name: "Rana D",
                email: "rana@gmail.com",
                position: "Full Stack Developer"
            }
        ]
    }

    searchHandler = (e) => {
        this.setState({ filter: e.target.value });
    }

    render() {
        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div className="container">
                <h2>Object search filter using mutiple key values</h2>
                <div className="search">
                <input type="text" 
                    value={filter} 
                    onChange={this.searchHandler} 
                    placeholder="Search"
                />
                </div>
               {filteredData.length > 0 ?
                <div className="list">
                    {filteredData.map(list => {
                        return <div key={list.email} className="list__item">
                            <h2>{list.name}</h2>
                            <p>{list.position}</p>
                            <p>{list.email}</p>
                        </div>
                    })}
                </div> : 
                <p>No records found</p>
               }
            </div>
        )
    }
}

export default App;
