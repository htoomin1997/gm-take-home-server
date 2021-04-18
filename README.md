=====Design Information and Direction=====  

Hello! This is the server piece to the Giant Machines take home. This should be run in tandem with the client to provide the best experience. 

Because there is no sensitive information, I have included the connection string directly, but I cannot stress enough how this should be put in an env file usually.

Something that I did not anticipate, is that Big Sur actually messed up a lot of my dbs. Both Mongo and Postgres stopped working after the update!!! :(

In the interest of time, ended up using the Cloud version of Mongo because you can create a free cluster. Because there is no information in here that is too sensitive, I have kept the connection string in the code itself, but that should usually be put in a .env file to be git ignored. Hopefully using this cluster is not an issue.

The largest dependency is the csv parser that I downloaded to help facilitate easier csv parsing. Also, if you would like to add the csv information I have included an endpoint for that as well. It was easier for me to do so for development purposes, so please use this as you would like. 

For further testing purposes, I have included an endpoint to drop the database and start fresh. Please feel free to use this endpoint!

The build environment is MacOS for this server as well.

=====Running instructions======  
Assuming that NPM is installed in the local machine  

Before running for the first time, make sure to run "npm install" to install all the dependencies.
Afterwards, go ahead and run "npm start" to start the server up.

=====Notes=====  
Thank you for taking the time to read this and review my code, I hope that it is up to Giant Machines's standards!

Something that I want to note is that my local keychain points to hm1487 which is an old github account that I no longer want to use, but I want to point out that that is still my account and that this is all my work! I have pushed from htoomin1997 as well to demonstrate this point.

~Htoo Min