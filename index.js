var express = require("express");

var port = process.env.PORT || 3000;
var app = express();


app.get("/abc", function (req, res, next) {

 console.log("req.query: ", req.query);

 var client_id = app.query.client_id
 var redirect_uri = app.query.redirect_uri
 var state = app.query.state
 var response_type = app.query.response_type

 var YOUR_PROJECT_ID = 'agentproject-be016';
 var ACCESS_TOKEN = 'YWJjZGVmZ2hpamtsbW5vcA==';

 res.redirect('https://oauth-redirect.googleusercontent.com/r/' + YOUR_PROJECT_ID + '#access_token=' + ACCESS_TOKEN + '&token_type=bearer&state=' + state);

});

app.listen(port, function () {
 console.log("listening on " + port);
})







// const http = require('http');

// http.createServer((request, response) => {
//   const { host, method, url } = request;
//   let body = [];
//   request.on('error', (err) => {
//     console.error(err);
//   }).on('data', (chunk) => {
//     body.push(chunk);
//   }).on('end', () => {
//     body = Buffer.concat(body).toString();
//     // BEGINNING OF NEW STUFF

//     response.on('error', (err) => {
//       console.error(err);
//     });

//   //  response.statusCode = 200;
//   //  response.setHeader('Content-Type', 'application/json');
//     // response.setHeader("https://oauth-redirect.googleusercontent.com/r/agentproject-be016#access_token=abcd&token_type=bearer&scope=name&state=CscCQUZEXzV0bFRSN2x3TUpJRHo1VGxkMmo0ZXdXNmdGdHg1UUZ5eExpSGtkTVhISElyekhUaTFJY3VRSlJUa1pBU3BkM0x2OHRCOEJtS2U2WXR4cHFRZWU3MXhZdm9GNnB1OGlmNUdLYzRLcFI5Wm05T0JOVVVuRGFBQTRJVGdTY1VCQkpvcEZhbXBfUkZPU0VPNFExbDVSbXhTcW56dndZYUQzaUFlOWY1S2FlektVd0hXMTRqb0VhM0JwNE13WjVnWXpRUEE4NTBfMDUzZGVlQVl4SVZvQXBHWEZCQTM2SUdWRTZwRzl0OWdCSTlIVVdoWTZqSGJUbFpxNFZ5UXhZM29rUFlDWjJIRTZWbE1NTGExbmxRem1GRWZnUkQxUjNPSlEtZ0FTdnJ5TklYLTVkTXllczV0NWhOX2xPeV9yc3ZYOG9rekhZEhdodHRwczovL3d3dy5nb29nbGUuY29tLyJBaHR0cHM6Ly9vYXV0aC1yZWRpcmVjdC5nb29nbGV1c2VyY29udGVudC5jb20vci9hZ2VudHByb2plY3QtYmUwMTYyFmFnZW50cHJvamVjdC1iZTAxNl9kZXY");
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.writeHead(200, {'Content-Type': 'application/json'})
//     response.writeHead(301,
//     {Location: 'https://oauth-redirect.googleusercontent.com/r/agentproject-be016#access_token=ABCC&token_type=bearer&state=CscCQUZEXzV0bFRSN2x3TUpJRHo1VGxkMmo0ZXdXNmdGdHg1UUZ5eExpSGtkTVhISElyekhUaTFJY3VRSlJUa1pBU3BkM0x2OHRCOEJtS2U2WXR4cHFRZWU3MXhZdm9GNnB1OGlmNUdLYzRLcFI5Wm05T0JOVVVuRGFBQTRJVGdTY1VCQkpvcEZhbXBfUkZPU0VPNFExbDVSbXhTcW56dndZYUQzaUFlOWY1S2FlektVd0hXMTRqb0VhM0JwNE13WjVnWXpRUEE4NTBfMDUzZGVlQVl4SVZvQXBHWEZCQTM2SUdWRTZwRzl0OWdCSTlIVVdoWTZqSGJUbFpxNFZ5UXhZM29rUFlDWjJIRTZWbE1NTGExbmxRem1GRWZnUkQxUjNPSlEtZ0FTdnJ5TklYLTVkTXllczV0NWhOX2xPeV9yc3ZYOG9rekhZEhdodHRwczovL3d3dy5nb29nbGUuY29tLyJBaHR0cHM6Ly9vYXV0aC1yZWRpcmVjdC5nb29nbGV1c2VyY29udGVudC5jb20vci9hZ2VudHByb2plY3QtYmUwMTYyFmFnZW50cHJvamVjdC1iZTAxNl9kZXY'});

//   // const responseBody = { url};

// //   response.write(JSON.stringify(responseBody));
//   //  return response.redirect('http://oauth-redirect.googleusercontent.com/r/agentproject-be016#access_token=abcd&token_type=beaer&scope=name&state=CscCQUZEXzV0bFRSN2x3TUpJRHo1VGxkMmo0ZXdXNmdGdHg1UUZ5eExpSGtkTVhISElyekhUaTFJY3VRSlJUa1pBU3BkM0x2OHRCOEJtS2U2WXR4cHFRZWU3MXhZdm9GNnB1OGlmNUdLYzRLcFI5Wm05T0JOVVVuRGFBQTRJVGdTY1VCQkpvcEZhbXBfUkZPU0VPNFExbDVSbXhTcW56dndZYUQzaUFlOWY1S2FlektVd0hXMTRqb0VhM0JwNE13WjVnWXpRUEE4NTBfMDUzZGVlQVl4SVZvQXBHWEZCQTM2SUdWRTZwRzl0OWdCSTlIVVdoWTZqSGJUbFpxNFZ5UXhZM29rUFlDWjJIRTZWbE1NTGExbmxRem1GRWZnUkQxUjNPSlEtZ0FTdnJ5TklYLTVkTXllczV0NWhOX2xPeV9yc3ZYOG9rekhZEhdodHRwczovL3d3dy5nb29nbGUuY29tLyJBaHR0cHM6Ly9vYXV0aC1yZWRpcmVjdC5nb29nbGV1c2VyY29udGVudC5jb20vci9hZ2VudHByb2plY3QtYmUwMTYyFmFnZW50cHJvamVjdC1iZTAxNl9kZXY');
//     response.end();
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.end(JSON.stringify(responseBody))

//     // END OF NEW STUFF
//   });
// }).listen(process.env.PORT || 5000);