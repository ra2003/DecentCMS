DecentCMS aims at being a decent CMS written in Node.
Its design principles are inherited from Drupal and Orchard CMS.

State
-----

The current state of DecentCMS is: naked.

The system can handle very simple sites, in a runtime-only fashion.
There is no dashboard yet.

All code is subject to change and refactoring.

Features
--------

The following features are implemented:

* Module system, with scoped dependency injection and automatic
  detection and loading of services.
* Themes
* Multi-tenancy
* Navigation menus
* Querying
* Content type system
* Widgets
* Documentation
* Express compatibility
* File-based content store
* Markdown
* Template overloading
* Code-based asynchronous view engine
* Dust-based asynchronous view engine
* Localization base infrastructure
* Tokens
* Logging (using Winston)

Future features include:

* Document database as the content store
* Localization implementation
* Dashboard
* Authentication
* Installer

Road map
--------

The road map is determined by me, based on what I think are the most
urgent features, on what my customers ask me to build, and on user
and contributor feedback.

Near future milestones are:

* Authentication and basic dashboard infrastructure
* Documentation up-to-date with code
* All features manageable through dashboard

Past milestones:

* First publicly accessible web site running DecentCMS:
  http://decentconsulting.com
* Documentation and community site running DecentCMS:
  http://decentcms.org

Installation
------------

There is an experimental installation procedure for the moment
that can be found at <http://decentcms.org/docs/getting-started>.

Does this project take contributions?
-------------------------------------

Yes, please.

Links
-----

The source code for DecentCMS is hosted on Github:
<https://github.com/DecentCMS/DecentCMS>.

The web site for the project can be found here:
<http://decentcms.org>
