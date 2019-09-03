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
                name: "Ed Davidson",
                email: "eddav@gmail.com",
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
            },
            {
                name: "Maddy Dennis",
                email: "maddydennis@gmail.com",
                position: "Web Developer"
            },
            {
                name: "Susan Samuel",
                email: "susansamuel85@gmail.com",
                position: "HR Assocaite"
            },
            {
                name: "Glen Mikael",
                email: "glenm22@gmail.com",
                position: "Senior Project Specialist"
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
                            <img src="https://via.placeholder.com/150" alt=""/>
                            <h2>{list.name}</h2>
                            <p className="position">{list.position}</p>
                            <p className="email">{list.email}</p>
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
