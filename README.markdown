# DreamFactory Excel Service and Tabulator

## Installation

1. Create a Excel service.

    ![alt text](src/images/createservice_readme.png)

2. Select service in the services directory and add your Excel file.

    ![alt text](src/images/addexcelfile_readme.png)

3. Create a [role and API key](http://guide.dreamfactory.com/docs/chapter03.html#creating-a-role) capable of talking to this Excel service.

    ![alt text](src/images/createrole_readme.png)
    
    ![alt text](src/images/createapikey_readme.png)

4. Copy config.js.example to config.js and update the apiKey and spreadseetUrl with the API Key we just generated.
    - The spreadsheetUrl will look like http(s)://<YOUR_URL>/api/v2/<SERVICE_NAME>/_spreadsheet/<SPREADSHEET_NAME>/\<WORKSHEET>
    - The userUrl will look like http(s)://<YOUR_URL>/api/v2/system/user
    
5. Configure Okta connector using [this guide](https://guide.dreamfactory.com/docs/chapter04.html#the-openid-authentication-process).
    - On [this step](https://guide.dreamfactory.com/docs/chapter04.html#adding-okta-users-to-the-dreamfactory-application) you should go in the <b>login.html</b> and add href like in the guide.
        ![alt text](src/images/oktalink_readme.png)

7. Install the [http-server NPM package](https://www.npmjs.com/package/http-server) `npm install http-server -g`
    - http-server is a simple, zero-configuration command-line http server for testing, local development, and learning.

8. Run http-server from inside the project root directory `http-server .` and load the specified URL to the browser.
    - Port defaults to 8080

## Troubleshooting

If any issues arise creating the API, Key, or Role, or configuring Okta please reference our new and [improved guide](http://guide.dreamfactory.com/docs/#about-this-guide). 
