generator-angular-wakanda
=========================
This generator lets you scaffold your AngularJS/Wakanda website.

##Usage

Install `generator-angular-wakanda` :

```
npm install -g generator-angular-wakanda
```

Go to your Wakanda project directory

```
cd MyWakandaSolution/MyWakandaProject
```

Run `yo angular-wakanda`, optionally passing an app name (the app name of your angular app) :

```
yo angular-wakanda [app-name]
```

You will be asked a couple of questions like :

* The name of the folder you want to put all the usual yo angular scaffold
* Whether you want to use Sass/Compass or not
* Whether you want to use Bootstrap or not
* Which angular modules you whish to include

Example of output directory tree :

```
WakandaProjectFolder
├─┬ angularApp
  ├─┬ app
    ├── scripts
    ├── styles
    ├── index.html
  ├── test
  ├── bower.json
  ├── package.json
  ├── Gruntfile.js
├── package.json
├── Gruntfile.js
├── .gitignore
```
In result, you will have two levels of Gruntfile.js :

* The one at the root where you can call tasks like `grunt wakCopy`
* The one in your angularApp folder which contains exactly the same kind of tasks as you would expect from a regular Gruntfile.js made with `yo angular` like `grunt serve`, `grunt build` …

##Angular subgenerators available

In your angularApp folder, you can run any of the [official yeoman generator-angular subgenerators](https://github.com/yeoman/generator-angular/blob/master/readme.md#generators).

##Contributors

* If you don't have yo : `npm install -g yo`
* Clone the repo
* `npm install`
* If you already work with the genrator-angular-wakanda, you'll need to uninstall it : `npm uninstall generator-angular-wakanda -g`
* In the repo directory : `npm link` (will let you use your local version of the generator)