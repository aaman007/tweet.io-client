import Tweet from "./Tweet";
import LoadMoreButton from "../ui/LoadMoreButton";

const TweetList = ({ tweets, hasNext, onNextClick, editable }) => {
    if (!tweets.length) {
        return <p style={{ margin: '20px auto' }}> No tweets to show! </p>
    }

    return (
        <div>
            {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} editable={editable} />)}
            { hasNext && <LoadMoreButton onClick={onNextClick}> Load More </LoadMoreButton> }
        </div>
    )
};

TweetList.defaultProps = {
    tweets: []
}

export default TweetList;