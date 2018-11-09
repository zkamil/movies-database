# movies-database

Client side code for the same is kept in client folder in the code base

For running the code in local we have to setup local mongodb database in http://localhost:27017/
1. Open your terminal
2. run 'brew update'
3. run 'brew install mongodb'
4. run 'mkdir -p /data/db'
5. run 'mongod
Verify that MongoDB has started successfully by checking the process output for the following line: 
'[initandlisten] waiting for connections on port 27017'

Pull the code from git repository to a project folder
1. run 'npm install' to install server side dependecies
2. run 'npm run client-install' to install client side dependencies
3. run 'npm run dev'
Browser will open with http://localhost:3000/. 
We can with the Movie Database MVP
