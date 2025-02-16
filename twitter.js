import { OAuth } from 'oauth';

export default function handler(req, res) {
    const {
        TWITTER_CONSUMER_KEY,
        TWITTER_CONSUMER_SECRET,
        TWITTER_CALLBACK_URL,
    } = process.env;

    const oauth = new OAuth(
        "https://api.twitter.com/oauth/request_token",
        "https://api.twitter.com/oauth/access_token",
        TWITTER_CONSUMER_KEY,
        TWITTER_CONSUMER_SECRET,
        "1.0A",
        TWITTER_CALLBACK_URL,
        "HMAC-SHA1"
    );

    oauth.getOAuthRequestToken((error, oauthToken) => {
        if (error) {
            return res.status(500).json({ error: "Failed to get OAuth token" });
        }
        const authURL = `https://api.twitter.com/oauth/authenticate?oauth_token=${oauthToken}`;
        res.json({ oauth_url: authURL });
    });
}
