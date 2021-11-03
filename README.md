## Installation and Setup

### Installing Packages
``` npm install ```

### Running the application
``` npm start ```           
   
Application would be accessible on 
<a href="http://localhost:3000"> http://localhost:3000 </a>        
To use the application, registration is required. An api call to the        
backend server is needed for register. Which is why backend server      
also should be live on <a href="http://localhost:8000"> http://localhost:8000 </a>           
The server address could be configured by changing the BASE_URL on        
```/src/constants/index.js``` file


## Features
1. Authentication (Custom with username and password)
2. Users can post tweets
3. Users can update or delete their tweets
4. Users can view their tweets in their profile page
5. Each user has a unique url based on their username
6. Users can view recent tweets from all the users that they follow
7. Users can view recent tweets from all their followers
8. Users can follow/unfollow other users. For this Home page would show a list of users that the user can follow
9. User profile would show both follower and following count
10. Tweets has the timestamp field denoting when it was created in viewing user's local time
