import Tweet from "./Tweet";

const TweetList = ({ tweets, editable }) => {
    return (
        <div>
            {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} editable={editable} />)}
        </div>
    )
};

TweetList.defaultProps = {
    tweets: []
}

export default TweetList;