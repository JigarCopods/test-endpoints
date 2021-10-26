## Development

This project allows you to create test endpoints to return hardcoded data.
After cloning this repo, you can perform following steps:

Installation:

```sh
npm install
```

Run project

```sh
node index.js
```

To add new endpoint for GET request,
1. Add a json file under api/get directory (Name of json file will be the name of end point)
2. Add json data that is expected as a apoi response in created file
3. Re-run the server
    
Example:
1. I have created a file called as getData.json under api/get directory and kept {data:{}} as conent of that file
2. When I re-run the server and hitn http://localhost:3000/getData, it will return {data:{}} as response
