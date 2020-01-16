Sign up front-end flow 

(Signup Form(onSubmit))--> signup action creator --> Backend API (auth-app/server) on port 3090 to get JWT

JWT gets stored in browser's localStorage under key 'token' and getItem keeps it saved until signout. 