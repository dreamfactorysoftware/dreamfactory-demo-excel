# DreamFactory Demo Application: Excel Service and Tabulator

This application demonstrates DreamFactory's ability to serve Excel/CSV/ODS files in JSON format. You can view a live demonstration at http://excel.demo.dreamfactory.com/.

## Installation

1. Create an Excel service.

    ![alt text](src/images/createservice_readme.png)

2. Select service in the services directory and add <b>example-spreadsheet.ods</b> file from the root directory.

    ![alt text](src/images/addexcelfile_readme.png)

3. Create a [role and API key](http://guide.dreamfactory.com/docs/chapter03.html#creating-a-role) capable of talking to this Excel service.

    ![alt text](src/images/createrole_readme.png)
    
    ![alt text](src/images/createapikey_readme.png)

4. Copy `config.js.example` to `config.js` and update the `apiKey` and `spreadsheetUrl` with the API Key we just generated.
    - The spreadsheetUrl will look like http(s)://<YOUR_URL>/api/v2/<SERVICE_NAME>/_spreadsheet/<SPREADSHEET_NAME>/\<WORKSHEET>
    - The userUrl will look like http(s)://<YOUR_URL>/api/v2/system/user
    
5. Configure Okta connector using [this guide](https://guide.dreamfactory.com/docs/chapter04.html#authenticating-with-okta).
    - On [this step](https://guide.dreamfactory.com/docs/chapter04.html#adding-okta-users-to-the-dreamfactory-application) you should go in the <b>login.html</b> and add href like in the guide.
        ![alt text](src/images/oktalink_readme.png)

### Running the Application Locally

You can boot up the application in your local environment by installing the [http-server NPM package](https://www.npmjs.com/package/http-server). http-server is a simple, zero-configuration command-line http server for testing, local development, and learning. To install it run this command:

    $ cd YOUR_PROJECT_ROOT_DIRECTORY
    $ npm install http-server

Once installed, run http-server from inside the project root directory:

    $ http-server .
    Starting up http-server, serving .
    Available on:
    http://127.0.0.1:8080
    http://172.20.10.4:8080
    Hit CTRL-C to stop the server

The default port is `8080` however http-server will automatically choose an alternative if you're already running an application on this port.

## Troubleshooting

If any issues arise creating the API, Key, or Role, or configuring Okta please reference our new and [improved guide](http://guide.dreamfactory.com/docs/#about-this-guide). 
