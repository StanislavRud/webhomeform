import './App.css';
import React from "react";
import InputFields from "./components/InputFields/InputFields";
import Comments from "./components/Comments/Comments";
import {mainAPI} from "./components/API/api";

class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            name: '',
            newCommentText: '',
            totalPages: [],
            currentPage: 1,
            disableButton: false,
            hideButton: false,
            lastPage: '',
            disablePostBtn: true,
            upBtn: false,
            scrolling: false
        }
    }


    getComments = (e) => {
        e.preventDefault();

        this.setState(state => {
            mainAPI.getCommentsData(state.currentPage)
                .then(data => {
                    this.setState({
                        comments: data.data,
                        totalPages: data.total,
                        currentPage: data.current_page,
                        hideButton: true,
                        lastPage: data.last_page
                    })

                });
            return {
                ...state
            }
        });

    };

    onPageChanged = (pageNumber) => {
        this.setState(state => {
            mainAPI.getCommentsData(pageNumber)
                .then(data => {
                    this.setState({
                        comments: data.data,
                        totalPages: data.total,
                        currentPage: data.current_page,
                    })

                });
            return {
                ...state
            }
        });
    };

    postComment = () => {
        let name = this.state.name;
        let text = this.state.newCommentText;

        if (name !== '' && text !== '') {
            mainAPI.postComments(name, text)
                .then(this.setState({
                    name: '',
                    newCommentText: ''
                }))
        } else {
            alert('Please input all fields')
        }

    };

    disableButton = () => {
        return this.setState({disableButton: true});
    };

    onChangeName = event => {
        this.setState({name: event.target.value.trim().replace(/ +/g, ' ')});

    };

    onChangeText = event => {
        this.setState({newCommentText: event.target.value});
    };


    moreComments = (e) => {

        e.preventDefault();

        this.setState(state => {
            state.currentPage++;
            mainAPI.getCommentsData((state.currentPage))

                .then(data => {
                    this.setState({
                            comments: [...state.comments, ...data.data],
                        }
                    );

                    return {
                        ...state,

                    }
                });
        })

    };

    date = (value) => {
        return new Date(value).toLocaleDateString()
    };

    componentDidMount() {
        window.addEventListener('scroll', this.showBtnUp);
    }


    showBtnUp = () => {
        if (window.scrollY >= 100) {
            this.setState({upBtn: true});
        } else {
            this.setState({upBtn: false});
        }

    };

    render() {

        return (
            <div className="App">
                <InputFields postComment={this.postComment}
                             onChangeName={this.onChangeName}
                             onChangeText={this.onChangeText}
                             name={this.state.name}
                             newCommentText={this.state.newCommentText}

                />
                <Comments getComments={this.getComments}
                          comments={this.state.comments}
                          totalPages={this.state.totalPages}
                          currentPage={this.state.currentPage}
                          onPageChanged={this.onPageChanged}
                          moreComments={this.moreComments}
                          disableButton={this.state.disableButton}
                          hideButton={this.state.hideButton}
                          lastPage={this.state.lastPage}
                          date={this.date}
                          upBtn={this.state.upBtn}
                />
            </div>
        );
    }
}

export default App;
