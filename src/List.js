import React from 'react';
import { snippet } from './data/data';
import SnippetCard from './components/snippetCard';
import './components/header.css';
import { FaSearch, FaRegHeart } from 'react-icons/fa';

let codeSnippet = snippet;
let filteredResult=[];


export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchText:' ',
        };
      };
    render(){
    return(
        <div>
            <div className="bg">
                <div className="search">
                    <input id="searchBar" className="input" placeholder="Search" onChange={(value)=>this.setState({searchText: value.target.value})}></input>
                    {console.log(this.state.searchText)}
                    
                    <p className="icon"><FaSearch/></p>
                </div>
                <div className="saved">
                    <p>saved <FaRegHeart/></p>
                </div>
            </div>
            {
                filteredResult = codeSnippet.filter((val)=>{
                    if(this.state.searchText == ""){
                    return val
                    }
                    else if(val.code.toLowerCase().includes(this.state.searchText.toLowerCase())){
                    return val
                    }
                }).map((val)=>{
                return (
                <SnippetCard
                    title={val.title}
                    origin={val.origin}
                    code={val.code}
                    />)
                }),
                console.log(filteredResult)
            }
            {
                    filteredResult.map(data=>{
                        return(
                            <SnippetCard
                            title={data.props.title}
                            origin={data.props.origin}
                            code={data.props.code}
                            />
                        )
                    })
            }
        </div>
        )
    }
}