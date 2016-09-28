# Building a resume website

This is a basic tutorial starting helping a user with zero knowledge build a basics html/css web resume.  
At the conclusion of this tutorial, I'll show you how to host it online for free!  You can see our progress [here](https://clevernyyyy.github.io/resume/).

It's currently in-progress, being updated about once a week.  

## Table of Contents

  1. [Introduction](#introduction)
  1. [Scaffolding](#scaffolding)
  1. [Mocking up the Paper](#mocking-up-the-paper)
  1. [Creating Content within Paper Resume](#creating-content-within-paper-resume)
  1. [Creating the big-headings](#creating-the-big-headings)
  1. [Creating small-headings](#creating-small-headings)


## Introduction

Building websites can be pretty complicated, but at its most basic it resembles a human being.

#### html

`HTML` is comparable to the skeletal structure of a person.  It represents the makeup of a person, 
how tall they are, how long their arms and legs are, etc.  Often `HTML` is referred to as `markup`, 
the terms will be used interchangeably in this document.  We will be using some of the most current 
constructs in `HTML 5.0`.

#### css

I often think of `CSS` as the skin and appearance of a person.  It helps determine a person's overall, 
look - skin-tone, eye-color, freckles, etc.  `CSS` for a webpage is extremely comparable - it's the 
styling of a webpage.  We will be utilizing `CSS 3.0` for our resume build.

#### javascript

If `HTML` is the skeleton, and `CSS` is the appearance of a person, then `JavaScript` is the muscles.  
`JavaScripts` helps determine how a webpage interacts with itself and the user.  How it animates when a 
user scolls, or if a popup is used when a user clicks a button.  It is essential in most modern webpages, 
but we will avoid using `JavaScript` in the resume static webpage for now.  I'll have other posts that 
will touch upon the its use later.

## Scaffolding

Now that we've discussed some of the basic elements of our project, lets start!  First we'll need to 
setup a scaffolding that we can utilize.  Let's create a main folder called `resume`.  Inside that folder,
we will create two more folders (`images` and `styles`) and our main `markup` file.

The `images` folder is for a picture of yourself if you'd like.  The `styles` folder is much more important.
It contains the `CSS` for your webpage.  As you can see below, I like to break it up into sections, but more
on that later.  Move on once your scaffolding represents below.

```
resume
├─ images
│  └─ me.jpg
├─ styles
│  ├─ colors
│     └─ colors.css
│  ├─ layout
│     └─ layout.css
│  ├─ text
│     └─ text.css
│  └─ app.css
├─ index.html
└─ README.md
```

## Mocking up the Paper

Open up `index.html`, we will start there.  If you haven't heard of [bootstrap](http://getbootstrap.com/), it is a popular HTML, CSS, and JS framework for web development created by Twitter.  Unless you plan on having extremely robust styles in your own project, bootstrap is typically a good starting point.  We will be bringing it in via a CDN, otherwise known as a content delivery network.

Let's mockup the HTML for our resume - the plan is to have a background with a "paper" resume on top.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>  
    <meta charset="utf-8">
    <meta name="description" content="Adam Schaal Resume">
    <meta name="author" content="Adam Schaal">
    <title>Adam Schaal - Resume</title>

    <!-- BOOSTRAP CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- CSS  -->
    <link href="./styles/app.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  </head>

  <main>
    <div class="paper">
      <div class="content">

      </div>
    </div>
  </main>
</html>
```

That doesn't do much yet.  Let's add some style!

If you recall, we have some styling scaffolding.  Typically for large projects I use a framework called [sass](http://sass-lang.com/), which is a form of CSS, but for this project I'm using vanilla css.  Open up `app.css` and paste the following:

```css
@import "colors/colors.css";
@import "layout/layout.css";
@import "text/text.css";
```

As you can see in our `index.html`, we're importing the `app.css` with this line.
```html
<link href="./styles/app.css" type="text/css" rel="stylesheet" media="screen,projection"/>
```
And in turn, we're importing the colors, layouts, and text stylings.  Open up `layout/layout.css` and paste the following:
```css
// ref the "main" html element
main {
  background-color: #eee;
}

// ref the "paper" class
.paper {
  height: 100vh;
  width: 1000px;
  background-color: #fff;
  margin: 0 auto;
}
```

Okay, now we finally have something to look at.  Open up your `index.html` in your favorite browser.  Pretty boring, eh?  You should see two grey stripes outside a large white stripe in the middle of the page.  Leave the file open in your browser, every change from here you should be able to simply refresh the page to view the updates.  

Lets make this actually look like paper now.  Let's add some padding in the `main` element and a shadow to the `paper` class.

```css
main {
  background-color: #eee;    
  padding: 20px;
}
.paper {
  height: 100vh;
  width: 1000px;
  background-color: #fff;
  margin: 0 auto;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
```

Refresh your page in the browser.  Now that looks like a piece of paper, but let's make the background a little more interesting.  Modify the `main` styling to this:

```css
main {
  background-image: radial-gradient(circle, #99B 70%, #584b4b 100%);
  padding: 20px;
}
```

Awesome!  That radial-gradient is a cool effect you can use to highlight stuff centered within a page.  Okay, we're happy to see our paper well defined within the page, ready for some content now.

## Creating Content within Paper Resume

Now it's time to add content to the paper.  Let's start by splitting the resume into two columns.  First edit your `main` element inside the `index.html` file to this:

```html
  <main>
    <div class="paper">
      <div class="content">
        <div class="left-col pink">
          TEST
        </div>
        <div class="right-col grey">
          NAME
        </div>
      </div>
    </div>
  </main>
```

Let's add the colors first so we can see what we are accomplishing.  Head over to `colors/colors.css` and paste in these simple classes:
```css
.pink {
  background-color: pink;
  min-height: 100vh;
}
.grey {
  background-color: #eee;
  min-height: 100vh;
}
```

If you refresh your page you should see a pink bar with the word "TEST" above the gold bar with the word "NAME".  Let's fix that; open up the `layout/layout.css` file and add the following classes:

```css
.left-col {
  display: inline-block;
  width: 640px;
}
.right-col {
  display: inline-block;
  width: 360px;
  float: right;
}
```

Now when you refresh the page, you'll see the two columns.  I think the grey looks nice, but I'll probably remove the pink eventually.  In fact, let's work on that grey section a little.  I think it'd be a great spot for a nice, big callout for our name and maybe we can stick the content in the pink section.  Edit the `right-col` section to this:

```html
  <div class="right-col grey">
    <div>Adam T. Schaal</div>
    <div>Front End Software Engineer</div>
    <div>entrepreneur  ·  teacher  ·  designer  ·  builder</div>
  </div>
```
After a refresh, you'll see the above in the grey section.  It seems kind of boring, we should dress it up.  First add the classes in html:

```html
  <div class="right-col grey">
    <div class="header">Adam T. Schaal</div>
    <div class="second-head">Front End Software Engineer</div>
    <div class="sub-header">entrepreneur  ·  teacher  ·  designer  ·  builder</div>
  </div>
```

Next edit the `text/text.css` file for the first time.
```css
// you may need to modify these sections based on name length, job title and tagline length.
.header {
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 0.2em;
  vertical-align: top;
}
.second-head {
  font-size: 18px;
  letter-spacing: .10em;
  font-weight: 900;
}
.sub-header {
  font-size: 16px;
  color: #6e9ad0;
}
```

Hmmm, notice anything that could present a problem?  The text is right at (0,0) in the top, left corner.  Let's add some padding by adding this line to end of the `right-col` class in `layout/layout.css`.

```css
padding: 20px 20px 20px 30px;
```

Now the top section of right column is really looking good!  Let's move on to the left column and start by creating some big headings.

## Creating the big-headings

I would like to use icons within my "big-headings", so I have to import some.  I prefer the popular [Font Awesome](http://fontawesome.io/icons/) icon set so that's what I'll import through a CDN again.  Place this line in your `index.html` below the bootstrap css call, but _above_ the app.css call:

```html
  <!-- FONT AWESOME ICONS -->
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
```

Next, let's go edit the `left-col` div to this:

```html
  <div class="left-col">
    <div class="big-headings">
      <div class="bh-icon-circle">
        <div class="bh-icon">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
```
You'll notice two things - first we got rid of the pink class (feel free to also delete that from `colors/colors.css`).  Also, you'll see that font-awesome class `fa-graduation-cap`.  That's how you pull in a [Font Awesome](http://fontawesome.io/icons/) icon - more can be found [here](http://fontawesome.io/icons/).

Now we'll need to edit `layout/layout.css` to update utilize this markup.

```css
.big-headings {
  display: flex;
  margin-bottom: 5px;
}
.bh-icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid white;
  z-index: 2;
  margin-top: -5px;
  margin-left: -5px;
  background-color: #6e9ad0;
}
.bh-icon {
  color: white;
  margin-top: 7px;
  margin-left: 2px;
  font-size: 20px;
  text-align: center;
}
```

If you refresh your browser, you will see a nice blue circle with a white icon in the center.  This is the start of our big-heading.

Next, let's add the content area to the html:
```html
  <div class="big-headings">
    <div class="bh-icon-circle">
      <div class="bh-icon">
        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
      </div>
    </div>
    <div class="bh-component">
    </div>
  </div>
```

And add this section to the bottom of the `layout/layout.css`:
```css
.bh-component {
  display: flex;
  background-color: #bfd8e6;
  margin-left: -10px;
  padding-left: 20px;
  padding-top: 4px;
  margin-top: 3px;
  width: 550px;
  max-height: 32px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
```

After refreshing, you should have a nice light-blue stripe protruding from the icon-circle.  Let's add some heading-content to the blue stripe.  I'm thinking that we will use Education as our heading, and maybe let's throw a date far right in the blue stripe.  So edit the `bh-component` in `index.html` to this:

```html
  <div class="bh-component">
    <span class="bh-text bh-description">Education</span>
    <span class="bh-text">2016</span>
  </div>
```

Add the`bh-text` class to the `text/text.css` file.
```css
.bh-text {
  height: 19px;
  font-weight: bold;
  top: 6px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: .05em;
}
```

And add the `bh-description` class to the `layout/layout.css` file.
```css
.bh-description {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  min-width: 470px;
}
```

When you refresh, you'll see your first big-header!  Let's add another section below the Education big-heading.
```html
  <div class="big-headings">
    <div class="bh-icon-circle">
      <div class="bh-icon">
        <i class="fa fa-briefcase" aria-hidden="true"></i>
      </div>
    </div>
    <div class="bh-component">
      <span class="bh-text bh-description">Work Experience</span>
      <span class="bh-text">2016</span>
    </div>
  </div>
```

The `html` portion is relatively large and you'll notice that all that changes between the sections is the icon class from `fa-graduation-cap` to `fa-briefcase` and the `bh-description` from Education to Work Experience.  You're touching upon a flaw within vanilla html/css projects.  This is one of the reasons that other frameworks exist.  Imagine a big-heading component, where we just send in an `icon-class`, a `description`, and a `date`.  This is the advantage of frameworks like [ReactJS](https://facebook.github.io/react/), which I also plan to create a tutorial for.

For now, I'm going to add several big-heading sections in `index.html`.  Let's make 5 sections for use later.

```html
    <div class="big-headings">
      <div class="bh-icon-circle">
        <div class="bh-icon">
          <i class="fa fa-group" aria-hidden="true"></i>
        </div>
      </div>
      <div class="bh-component">
        <span class="bh-text bh-description">Leadership Experience</span>
        <span class="bh-text">2016</span>
      </div>
    </div>
    <div class="big-headings">
      <div class="bh-icon-circle">
        <div class="bh-icon">
          <i class="fa fa-trophy" aria-hidden="true"></i>
        </div>
      </div>
      <div class="bh-component">
        <span class="bh-text bh-description">Honors and Awards</span>
        <span class="bh-text">2016</span>
      </div>
    </div>
    <div class="big-headings">
      <div class="bh-icon-circle">
        <div class="bh-icon">
          <i class="fa fa-globe" aria-hidden="true"></i>
        </div>
      </div>
      <div class="bh-component">
        <span class="bh-text bh-description">Other Strengths</span>
        <span class="bh-text">2016</span>
      </div>
    </div>
```

After refresh, you'll see the 5 headings and we're on our way to a nice web resume!


## Creating Small Headers

Now that we have big-headers and their general format, should make some small headers in the grey section.  Let's add some similar css to `layout/layout.css`:

```css
  .small-headings {
    display: flex;
    margin-bottom: 5px;
    margin-left: -15px;
  }
  .sm-icon-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid #eee;
    z-index: 2;
    margin-top: -5px;
    margin-left: -5px;
    background-color: #fff;
  }
  .sm-icon {
    color: #000;
    margin-top: 7px;
    margin-left: 2px;
    font-size: 20px;
    text-align: center;
  }
  .sm-component {
    display: flex;
    background-color: #fff;
    margin-left: -10px;
    padding-left: 20px;
    padding-top: 3px;
    margin-top: 3px;
    width: 300px;
    max-height: 32px;
    border-bottom: 3px solid #ddd;
    border-right: 2px solid #ddd;
  }
  .sm-description {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    min-width: 470px;
  }
```

And also edit the `.bh-text` class in `text/text.css` to the following to include `.sm-text`.

```css
.bh-text, .sm-text {
  height: 19px;
  font-weight: bold;
  top: 6px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: .05em;
}
```

Now, inside `index.html` file, let's add some small headings.  If you notice in the `layout/layout.css`, we've made the new small-headings white to stand out. 

```html
  <div class="right-col grey">
    <div class="header">Adam T. Schaal</div>
    <div class="second-head">Front End Software Engineer</div>
    <div class="sub-header">entrepreneur  ·  teacher  ·  designer  ·  builder</div>
    <div class="small-headings">
      <div class="sm-icon-circle">
        <div class="sm-icon">
          <i class="fa fa-file-text-o aria-hidden="true"></i>
        </div>
      </div>
      <div class="sm-component">
        <span class="sm-text">Objective</span>
      </div>
    </div>
    <div class="small-headings">
      <div class="sm-icon-circle">
        <div class="sm-icon">
          <i class="fa fa-bar-chart aria-hidden="true"></i>
        </div>
      </div>
      <div class="sm-component">
        <span class="sm-text">Skills</span>
      </div>
    </div>
    <div class="small-headings">
      <div class="sm-icon-circle">
        <div class="sm-icon">
          <i class="fa fa-pie-chart aria-hidden="true"></i>
        </div>
      </div>
      <div class="sm-component">
        <span class="sm-text">Personal Skills</span>
      </div>
    </div>
  </div>
```

Upon refresh, you'll see we're done with headings!  Next let's move on to content!

