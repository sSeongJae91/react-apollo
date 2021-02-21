const postsResolvers = require('./posts');
const usersResplvers = require('./users');
const commentsResplvers = require('./comments');

module.exports = {
    Post: {
        likeCount:(parent) => parent.likes.length,
        commentCount:(parent) => parent.comments.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResplvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResplvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}