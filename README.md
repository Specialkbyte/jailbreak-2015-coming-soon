# Jailbreak 2015 Coming Soon Landing Page
A simple Ghost app (ghost.org) for the Jailbreak 2015 coming soon website. The Ghost app servers some static pages and the frequently asked questions section. The FAQ section is a dirty hack of all posts made end up there.

### Custom Theme
The theme is custom theme called `jailbreak-coming-soon`. It uses Foundation as a CSS platform. Theme is ready to go with SASS, SCSS, Coffeescript and limited Sprockets Directives support to make developing the theme easier on everyone. The built distributed static files are included in this repo because they are deployed currently onto the heroku node that runs this system.

### Developing
Run the ghost app in testing mode. Instructions on ghost.org.
To develop the theme you will need bower, node and grunt installed. Use `grunt watch` to setup a file watcher that will rebuild the appropiate files whenever you make changes. The default `grunt` command builts the distribution files just once.
