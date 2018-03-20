# General info #

### Paperclip - Professional Responsive Template ###

*  Perfect for business and personal use
*  Looks great on all major browsers, tablets and phones
*  30+ unique templates to take your site up and running in no time
*  Vanilla CSS and LESS files included
*  Isotope gallery included
*  Functional PHP contact form included

Current release is v1.3.2. Buying this template now you become eligible to free download all of its future updates, including new pages and neat options!

### Template pages ###

*  About Us: Default
*  About Us: Options 1
*  Blog: Sidebar Left
*  Blog: Sidebar Right
*  Blog: No Sidebar
*  Blog Post: Sidebar Left
*  Blog Post: Sidebar Right
*  Blog Post: No Sidebar
*  Coming Soon
*  Contact Us: Default
*  Contact Us: Option 1
*  404 Error Page
*  Help Center
*  Help Item
*  (NEW!) Index Default
*  (NEW!) Index App Landing
*  Index: Version 1 (Slider)
*  Index: Version 1 (Parallax)
*  Index: Version 2 (Slider)
*  Index: Version 2 (Fullpage image)
*  Portfolio
*  Portfolio Item
*  Pricing: Boxes
*  Pricing: Joint Boxes
*  Pricing: Table
*  Resume
*  Search Results
*  Services
*  Shop
*  Shop Item
*  Shopping Cart
*  Sign In
*  Sign Up
*  Timeline: Center
*  Timeline: Left
*  Timeline: Right
*  UI Elements
*  User Profile

# Instructions #

### General ###

*  How do I edit the styles?

You can either work with vanilla .css or source .less files included. For vanilla .css, please open assets/css/styles.css. Source .less files are located at assets/less/. If you work with .less files, after the changes are done, you only need to compile the main styles.less file located at assets/less/styles.less. This is the main .less file that imports all of the other .less files (including original Bootstrap source .less files). Please visit http://lesscss.org/usage/index.html#third-party-compilers to find out how you can compile .less files to .css.

*  How do I create a new page?

The easiest way to create a new page is to clone the empty template.html page. This page already contains navbar, topic bar and footer.

*  How do I create a different color scheme?

You can easily create your own color scheme in a matter of one minute. Please follow the steps below: 

1) Open assets/less/colors.less and change the value of the two global LESS variables: @brand-primary and @brand-sec.  
2) Recompile .less files.

### Navigation bar ###

*  How do I edit the logo?

Please find this piece of code located in the .navbar container:


```
#!html

<a class="navbar-brand" href="index.html">
    <i class="fa fa-paperclip"></i> Paperclip
</a>
```

Edit the contents of the <a> ... </a> element to replace the original logo with your custom one.

*  How do I make the navigation panel fixed at the top?

To make the navigation panel fixed at the top of the screen as you scroll, please add the .body-navbar-fixed-top class to the body container, e.g.:


```
#!html

<body class="body-navbar-fixed-top"> ... </body>
```

### Contact form ###

*  How do I set up the contact form?

This template contains a fully functioning PHP contact form with spam protection powered by reCaptcha. Note: The contact form will not work in your local environment without a server that supports PHP. In order to set up the contact form, please follow the steps below:

1) Open config.php and fill out the required information:

 - reCaptcha Site ($publickey) and Secret ($privatekey) keys

Please go to https://www.google.com/recaptcha/admin/create if you don't have the keys yet.

 - Sender name and email address ($mail_sender)

This is a name and email address you will see in the "From:" line of new emails you will receive.

 - Your email address ($to_email)

This is an email address new emails will be sent to.

 - Email subject ($mail_subject)

This is a subject of new emails you will receive.

2) Insert your reCaptcha Site key (see Step 1) in /contact-us.html or/contact-us_option-1.html:


```
#!html

<div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
<!-- (e.g. <div class="g-recaptcha" data-sitekey="09sdv0sf9v0sdf9b0df9b09dfb"></div>) -->
```

3) Save all files.


### Miscellaneous ###

*  How do I add a parallax effect for a background image?

To add a parallax effect for a .foo container, first you need to specify the background-image url for this container, then add the .bg-parallax class to the .foo container, e.g.:


```
#!html

<div class="foo bg-parallax"> ... </div>
```

```
#!css

.foo {
  background-image: url(../img/background.jpg);
}

```

*  How do I add a blackout effect for a container?

To add a blackout effect for a .foo container, please add a .blackout class to this container. Optionally, you can indicate the data-blackout-max attribute to the .foo container to indicate the maximum opacity of the black layer the .foo container will fade to, e.g.:


```
#!html

<!-- The .foo container will fade to 100% black in its very top position -->
<div class="foo blackout" data-blackout-max="100"> ... </div> 
```

# Changelog #

Version 1.3.2 - 16/11/2015

* Parallax plugin updated

Version 1.3.1 - 13/11/2015

* New Index Version 3 page
* New Index App Landing page
* Add Smoothscroll plugin
* Minor bug fixes

Version 1.3.0 - 21/10/2015

*  New Index Default: Slider page
*  New Index Default: Parallax page
*  New Resume page
*  Add open dropdowns on hover option (navbar)
*  Add Mega Menu (navbar)
*  Add Backstretch plugin
*  Update Navbar
*  Update Footer
*  Update Bootstrap to v3.3.5
*  Update Countdown plugin to v2.0.2
*  Update Font Awesome to v4.4.0
*  Update Isotope plugin to v2.2.2
*  Update Lightbox plugin to v2.8.1
*  Update reCaptcha to noCaptcha
*  Replace Source Sans Pro font with Open Sans
*  Improve file structure
*  Improve general look of template pages and UI elements

Version 1.2.0 - 18/02/2015

*  Update Bootstrap to v3.3.2
*  Update Font Awesome to v4.3.0
*  Update Isotope to v2.1.0
*  Update Ligtbox to v2.7.1
*  Update jQuery to v1.11.2
*  Move original Bootstrap CSS and JS files into separate folders
*  Rename Font Awesome folder
*  Move Isotope JS into /js folder
*  Remove Isotope CSS
*  Add imagesloaded plugin
*  Add functional PHP contact form to contact-us.html, contact-us_option-1.html
*  Google map on contact-us_option-1.html is now built with Google Maps API
*  Remove unnecessary data attributes from sign-in.html
*  Add missing input labels to sign-in.html and sign-up.html
*  Replace lost password javascript with native collapse plugin
*  Replace sign in navbar button with link; replace .pull-right with .navbar-right
*  Set @grid-float-breakpoint to @screen-md-min
*  Add navbar submenu autoalign
*  Fix navbar dropdown menu last item border radius
*  Remove UI elements sidebar affix
*  Remove color options

Version 1.1 - 14/08/2014

*  NEW: Navbar Submenu added
*  NEW: Additional Color Schemes added
*  NEW: Contact Us: Option 1 template added
*  NEW: About Us: Option 1 template added
*  NEW: Timeline Center template added
*  NEW: Timeline Right template added
*  NEW: Timeline Left template added
*  NEW: Pricing Joint template added
*  NEW: Pricing Table template added
*  NEW: Search Results template added
*  NEW: Blog Sidebar Left template added
*  NEW: Blog No Sidebar template added
*  NEW: Blog Post Sidebar Left template added
*  NEW: Blog Post No Sidebar template added
*  IMPROVED: Homepage main slider modified
*  IMPROVED: Homepage fullscreen page modified
*  UPDATED: Twitter Bootstrap 3.2
*  UPDATED: FontAwesome 4.1.0
*  LESS code optimized
*  Small bugs corrected

Version 1.0 - 06/04/2014

- Initial release

# Sources and credits #

### General files ###

*  Twitter Bootstrap

URL: http://getbootstrap.com/  
AUTHOR: @mdo and @fat  
LICENSE: MIT License  

### Plugins ###

*  Font Awesome

URL: http://fontawesome.io/  
AUTHOR: Dave Gandy  
LICENSE: MIT license  

*  CSS Animation

URL: https://daneden.me/animate/  
AUTHOR: Dan Eden  
LICENSE: MIT license  

*  Scroll to top

URL: http://www.dynamicdrive.com/dynamicindex3/scrolltop.htm  
AUTHOR: Dynamic Drive  
LICENSE: http://www.dynamicdrive.com/notice.html  

*  Isotope

URL: http://isotope.metafizzy.co/  
AUTHOR: David DeSandro  
LICENSE: Commercial Developer Lisence  

*  jQuery Backstretch

URL: 		http://srobbin.com/jquery-plugins/backstretch/  
AUTHOR: 	Scott Robbin  
LICENSE: 	MIT license  

*  Lightbox 

URL: 		http://lokeshdhakar.com/projects/lightbox2/  
AUTHOR: 	Lokesh Dhakar  
LICENSE: 	Creative Commons Attribution 2.5 License  

*  Imagesloaded

URL:        http://imagesloaded.desandro.com/  
AUTHOR:     https://github.com/desandro/imagesloaded/graphs/contributors  
LICENSE:    MIT license  

* Countdown

URL:        http://keith-wood.name/countdown.html  
AUTHOR:     Keith Wood  
LICENSE:    MIT license  


* Smoothscroll

URL:        https://github.com/galambalazs/smoothscroll
AUTHOR:     Balazs Galambosi, Patrick Brunner, Michael Herf
LICENSE:    MIT license


### Images ###

* world-map.png

URL: http://simpleqode.com/
AUTHOR: Evgeny Simzikov
LICENSE: Creative Commons Zero

* dark_wood.png

URL: http://subtlepatterns.com/
AUTHOR: Atle Mo
LICENSE: CC BY-SA 3.0

* features_1.jpg, features_2.jpg, features_3.jpg, features_4.jpg

URL: http://jeshoots.com/
AUTHOR: Jan Vasek
LICENSE: CC0 1.0 Universal (CC0 1.0)

*  coming-soon_1.jpg, coming-soon_2.jpg, coming-soon_3.jpg, feedback.jpg, home_7.jpg, home_8.jpg, home_10.jpg

URL: http://unsplash.com/  
LICENSE: Creative Commons Zero

*  home_1.png

URL: http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_5252bb51404f8_1.JPG  
AUTHOR: Daniel Robert Dinu  
LICENSE: Creative Commons  

* home_2.png

URL: http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_52d092fc163a3_1.JPG  
AUTHOR: Todd Quackenbush  
LICENSE: Creative Commons  

* home_3.png

URL: https://s3.amazonaws.com/ooomf-com-files/oD0ceO7TUqdlh6YLVA6B_reef%20insp-72.jpg  
AUTHOR: Taylor Leopold  
LICENSE: Creative Commons  

* home_4.jpg, home_5.jpg, home_6.jpg

URL: http://www.freepik.com/  
AUTHOR: http://support.freepik.com/hc/en-us/articles/202567252-Who-is-behind-Freepik-  
LICESE:  Free License with Attribution

* item-3.png

URL: http://www.pixeden.com/psd-mock-up-templates/iphone-5s-psd-vector-mockup  
AUTHOR: Pixeden  
LICENSE:  Royalty free for use in both personal and commercial projects  

* item-2.png

URL: https://dribbble.com/shots/959424-Freebies-My-safari-browser-psd-template  
AUTHOR: Ilya Aleksandrov  
LICENSE: Free for Commercial and Personal Purposes  

*  Responsive Showcase (and all devices images)

URL: http://www.pixeden.com/psd-web-elements/responsive-showcase-psd  
AUTHOR: Pixeden.com  
LICENSE: Royalty free for use in both personal and commercial projects  

*  our-team.jpg, home_9.jpg

URL: http://www.flickr.com/photos/ter-burg/  
AUTHOR: Sebastiaan ter Burg  
LICENSE: Creative Commons  

*  photo-1.jpg - photo-6.jpg

URL: https://www.flickr.com/photos/meunier_prof/galleries/72157632677105635/  
LICENSE: Creative Commons   

*  Portfolio #1, #3, #6

URL:        http://forgraphictm.com/freebies/  
LICENSE:    Freebie  

*  Portfolio #2, #4, #5, #7, #8, Team #3

URL:        http://freelyphotos.com/  
LICENSE:    CC0 1.0  

*  shop-item_1.jpg - shop-item_6.jpg

URL: https://www.flickr.com/photos/amnesiaibiza/sets/72157633228748904
AUTHOR: Amnesia Ibiza  
LICENSE: Creative Commons   

*  Video File

URL: http://vimeo.com/67449472  
AUTHOR: Joan LLopart   
LICENSE: Creative Commons  