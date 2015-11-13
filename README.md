# HTML Angular POC

Using Bower to load client side packages
Using Gulp to compile TypeScript

To install the NPM pacakge such as TypeScript, Gulp, etc, run the following command:

`npm install`

If you have not already done so, install Bower globally

 `npm install -g bower`

To load Angular, Foundation, jQuery, etc run the following command:

`bower install`

You may also want to install TypeScript globally, even though it will be installed locally with this package.

`npm install -g typescript`

You can compile TypeScript by running 

`gulp ts`

(note: if you are using VS 2015, the IDE will compile the code for you)

You can also set up a watcher to compile TypeScript on every save:

`gulp ts-watcher`

You can run a local web server

`gulp webserver`

The starting page is angular.html.
