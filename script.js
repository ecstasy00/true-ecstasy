window.onload = async function () {
    try {
        const response = await fetch('/api/twitter-auth');
        const data = await response.json();
        document.getElementById('oauth-link').href = data.oauth_url;
    } catch (error) {
        console.error("Error fetching OAuth link:", error);
    }
};
