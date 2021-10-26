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
1. Add a json file under api/get directory (Note: name of json file will be the name of end-point)
2. Add json data in created file, which is expected as an api response
3. Re-run the server
    
Example:
1. I have created a file called as getTestData.json under api/get directory and kept 
{
    "data": {
        "key": "value"
    }
}
 as content of that file
2. When I re-run the server and hit http://localhost:3000/getTestData, it will return 
{
    "data": {
        "key": "value"
    }
} as response
