import React from "react";
import { NavLink, Route, Switch} from "react-router-dom";
import {Context} from "./data/components/Context";
import {MainPage} from "./data/components/mainPage/MainPage";
import {FriendPage} from "./data/components/friendPage/FriendPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./data/fonts/fonts.scss"
import "./App.scss";

const sorts = [
    {id: 1, name: 'default'},
    {id: 2, name: 'name ascending'},
    {id: 3, name: 'name descending'},
    {id: 4, name: 'age ascending'},
    {id: 5, name: 'age descending'},
];

const filters = [
    {id:1, name: 'default'},
    {id:2, name: 'alive'},
    {id:3, name: 'death'},
    {id:4, name: 'status unknown'},
    {id:5, name: 'female'},
    {id:6, name: 'male'},
];

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: [],
            defaultSort: [],
            search: '',
            filter: '',
            sort: '',
            id: 0,
            isFetching: true,
            page: 2,
        }
    }

    handleChange = ({target: {value}}) => this.setState({search: value});

    searchBy = (name) => name.includes(this.state.search);

    getFilter = filter => this.setState({filter: filter});

    filterBy = (status, gender) => {

        switch (this.state.filter) {
            case "alive":
                return status === "Alive";
            case "death":
                return status === "Dead";
            case "male":
                return gender === "Male";
            case "status unknown":
                return gender === "unknown";
            case "female":
                return gender === "Female";
            default:
                return true
        }
    };

    getSort = sort => this.setState({sort: sort});

    sortFriends = (sort) => {

        switch(sort) {
            case 'name ascending':
                return this.setState({friends: this.state.friends.sort((a,b)=> a.name > b.name ? -1 : 1)});
            case 'name descending':
                return this.setState({friends: this.state.friends.sort((a,b)=> a.name > b.name ? 1 : -1)});
            case 'age ascending':
                return this.setState({friends: this.state.friends.sort((a,b)=> a.created > b.created ? -1 : 1)});
            case 'age descending':
                return this.setState({friends: this.state.friends.sort((a,b)=> a.created > b.created ? 1 : -1)});
            default:
                return this.setState({friends: this.state.defaultFriends.map(res=>({...res}))})
        }
    }

    getId = id => this.setState({id: this.state.friends.findIndex(friend => friend.id === id)});

    getMoreFriends = async() => {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        let pageOffset = window.pageYOffset + window.innerHeight;


        if(pageOffset === scrollHeight && this.state.page < 6) {
            this.setState({isFetching: true});

            let request  =  await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`);
            let res = await request.json();
            res = res.results;
            this.setState({
                friends: [...this.state.friends, ...res],
                defaultFriends: [...this.state.defaultFriends,...res.map(res=>({...res}))],
                page: this.state.page + 1,

            });
            setTimeout(()=> this.setState({isFetching: false}), 2000);
        }
    }

    async componentDidMount() {

        let request  =  await fetch("https://rickandmortyapi.com/api/character/");
        let res = await request.json();
        res = res.results;
        this.setState({
            friends: [...res],
            defaultFriends: res.map(res=>({...res})),
        });
        setTimeout(()=> this.setState({isFetching: false}), 2000);

        window.addEventListener('scroll', this.getMoreFriends);

        const timer = setInterval(()=>this.state.page < 6 ?
            window.innerHeight === document.body.scrollHeight && this.getMoreFriends()
            : clearInterval(timer), 200)

    }

    render(){
        let {friends, search, filter, isFetching, sort} = this.state;
        return (
            <Context.Provider value={{
                friends,
                clickId: this.getId,
                isFetching,
                handleChange : this.handleChange,
                value: search,
                searchBy: this.searchBy,
                filters,
                filter,
                getFilter: this.getFilter,
                filterBy: this.filterBy,
                sorts,
                sort,
                getSort: this.getSort,
                sortFriends: this.sortFriends,
            }}>
                <header>
                    <div className="container text-left">
                        <NavLink to={"/"} >
                            <h1>My friends</h1>
                        </NavLink>
                    </div>
                </header>
                <Switch>
                    <Route
                        path={`/friend/${this.state.id}`}
                        render={()=> <FriendPage friend={this.state.friends[this.state.id]}/>}
                    />
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
                <footer>
                    <div className="container">
                        <p>copyright</p>
                    </div>
                </footer>
            </Context.Provider>
        );
    }

}

export default App;
