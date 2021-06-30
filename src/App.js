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
            currentPage: null,
            disableButton: false,
            hideButton: false,
            lastPage: null,
            disablePostBtn: true,
            createdComment:''
        }
    }


    getComments = (e) => {
        e.preventDefault();

        this.setState(state => {
            mainAPI.getCommentsData()
                .then(data => {
                    this.setState({
                        comments: data.data.map(item => (
                            {
                                id: item.id,
                                name: item.name,
                                text: item.text,
                                createdComment: item.created_at
                            }
                        )),
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
                        comments: data.data.map(item => (
                            {
                                id: item.id,
                                name: item.name,
                                text: item.text,
                                createdComment: item.created_at
                            }
                        )),
                        totalPages: data.total,
                        currentPage: data.current_page
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

        if (this.state.name != '' && this.state.newCommentText != '') {
            mainAPI.postComments(name, text)
                .then(data => console.log(data))
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
        this.setState({name: event.target.value});
    };

    onChangeText = event => {
        this.setState({newCommentText: event.target.value});
    };

    moreComments = (e) => {

        e.preventDefault();

        this.setState(state => {
            if (state.currentPage >= state.lastPage) {
                this.disableButton();
            } else {
                mainAPI.getCommentsData(state.currentPage++)
                    .then(data => {
                        debugger
                        this.setState({
                                comments: [...state.comments.concat(data.data)]
                            }
                        );
                        return {
                            ...state,

                        }
                    });
            }
        })
    };

    render() {

        return (
            <div className="App">
                <InputFields postComment={this.postComment.bind(this)}
                             onChangeName={this.onChangeName.bind(this)}
                             onChangeText={this.onChangeText.bind(this)}
                             name={this.state.name}
                             newCommentText={this.state.newCommentText}

                />
                <Comments getComments={this.getComments.bind(this)}
                          comments={this.state.comments}
                          totalPages={this.state.totalPages}
                          currentPage={this.state.currentPage}
                          onPageChanged={this.onPageChanged.bind(this)}
                          moreComments={this.moreComments.bind(this)}
                          disableButton={this.state.disableButton}
                          hideButton={this.state.hideButton}
                          createdComment={this.state.createdComment}
                />
            </div>
        );
    }
}

export default App;
