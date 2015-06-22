generator-angular-wakanda - release notes
=========================================

##v0.4.2
* updated the grunt-connect-proxy dependency to grunt-connect-proxy@0.2.0. It fixes issue described in https://github.com/drewzboto/grunt-connect-proxy/issues/97

Changelog : https://github.com/Wakanda/generator-angular-wakanda/compare/v0.4.1...v0.4.2

##v0.4.1
Copyright update.

Changelog : https://github.com/Wakanda/generator-angular-wakanda/compare/v0.4.0...v0.4.1

##v0.4.0
* updated the peerDependency to generator-angular@0.11.1 + upgraded internal codebase https://github.com/yeoman/generator-angular/compare/v0.10.0...v0.11.1
* fixed import of bootstrap assets on `grunt wakCopyBuild` (only sass version)

If you had a previous version you may have to upgrade some dependencies (you'll be asked to).

(may have to sudo) `npm update generator-karma -g`

Changelog : https://github.com/Wakanda/generator-angular-wakanda/compare/v0.3.1...v0.4.0

##v0.3.1
Fixed proxy bug between connect and Wakanda Server preventing some auth requests correctly pass by.

Changelog : https://github.com/Wakanda/generator-angular-wakanda/compare/v0.3.0...v0.3.1

##v0.3.0
* updated the peerDependency to generator-angular@0.10.0 + upgraded internal codebase https://github.com/yeoman/generator-angular/compare/v0.9.5...v0.10.0
* updated the bower.json to match the last version of generator-angular
	* upgrade angular from 1.2.x to 1.3.x
	* upgrade angular-wakanda connector from 0.3.x to 0.4.x
	* added the latest modules shipped with 1.3.0 (aria, messages)
* fixed proxy bug with AWS instances (missing host header)

If you had a previous version you may have to upgrade some dependencies (you'll be asked to).

(may have to sudo) `npm update generator-angular generator-karma -g`

Changelog : https://github.com/Wakanda/generator-angular-wakanda/compare/v0.2.2-alpha...v0.3.0