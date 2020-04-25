import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <ul>
                {this.props.articles.map((el) => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.remoteArticles,
    };
};

export default connect(mapStateToProps, { getData })(Post);
