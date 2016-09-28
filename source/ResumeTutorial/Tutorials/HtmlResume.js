/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../../demo/ContentBox'
import styles from '../ResumeTutorial.css';
import CodeMirror from 'react-codemirror'

require('codemirror/mode/jsx/jsx')

const scaffoldingOptions = {
  mode: 'text/x-markdown',
  theme: '3024-day'
}
const codeMirrorOptions = {
  mode: 'jsx',
  theme: 'dracula'
}


export default class HtmlTutorial extends Component {
  render () {
    const scaffoldingMarkup = (
      'resume\n├─ images\n│  └─ me.jpg\n├─ styles\n│  ├─ colors\n│     └─ colors.css\n│  ├─ layout\n│     └─ layout.css\n│  ├─ text\n│     └─ text.css\n│  └─ app.css\n├─ index.html\n└─ README.md'
    );
    const htmlPaperMarkup = (
      '<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>  \n\t\t<meta charset="utf-8">\n\t\t<meta name="description" content="My Resume">\n\t\t<meta name="author" content="Adam Schaal">\n\t\t<title>My Resume</title>\n\n\t\t<!-- BOOSTRAP CSS -->\n\t\t<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">\n\n\t\t<!-- CSS  -->\n\t\t<link href="./styles/app.css" type="text/css" rel="stylesheet" media="screen,projection"/>\n\t</head>\n\t<main>\n\t\t<div class="paper">\n\t\t\t<div class="content">\n\n\t\t\t</div>\n\t\t</div>\n\t</main>\n</html>'
    );
    const appCSS = (
      '@import "colors/colors.css";\n@import "layout/layout.css";\n@import "text/text.css";'
    );
    const cssImportHtml = (
      '<link href="./styles/app.css" type="text/css" rel="stylesheet" media="screen,projection"/>'
    );
    const layoutCss = (
      '// ref the "main" html element\nmain {\n\tbackground-color: #eee;\n}\n\n// ref the "paper" class\n.paper {\n\theight: 100vh;\n\twidth: 1000px;\n\tbackground-color: #fff;\n\tmargin: 0 auto;\n}'
    );
    const layoutCssPaper = (
      'main {\n\tbackground-color: #eee;\n\tpadding: 20px;\n}\n\n.paper {\n\theight: 100vh;\n\twidth: 1000px;\n\tbackground-color: #fff;\n\tmargin: 0 auto;\n\t-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n\t-moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n\tbox-shadow:0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n}'
    );
    const layoutCssPaperMain = (
      'main {\n\tbackground-image: radial-gradient(circle, #99B 70%, #584b4b 100%);\n\tpadding: 20px;\n}'
    );
    const indexHtml = (
      '<main>\n\t<div class="paper">\n\t\t<div class="content">\n\t\t\t<div class="left-col pink">\n\t\t\t\tTEST\n\t\t\t</div>\n\t\t\t<div class="right-col grey">\n\t\t\t\tNAME\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</main>'
    );
    const colorsCss = (
      '.pink {\n\tbackground-color: pink;\n\tmin-height: 100vh;\n}\n.grey {\n\tbackground-color: #eee;\n\tmin-height: 100vh;\n}'
    );
    const layoutCssCols = (
      '.left-col {\n\tdisplay: inline-block;\n\twidth: 640px;\n}\n.right-col {\n\tdisplay: inline-block;\n\twidth: 360px;\n\tfloat: right;\n}'
    );
    const rightColHead = (
      '<div class="right-col grey">\n\t<div class="header">Adam T. Schaal</div>\n\t<div class="second-head">Front End Software Engineer</div>\n\t<div class="sub-header">entrepreneur  ·  teacher  ·  designer  ·  builder</div>\n</div>'
    );
    const textCss = (
      '// you may need to modify these sections based on name length, job title and tagline length.\n.header {\n\tfont-size: 30px;\n\ttext-transform: uppercase;\n\tfont-weight: 100;\n\tletter-spacing: 0.2em;\n\tvertical-align: top;\n}\n.second-head {\n\tfont-size: 18px;\n\tletter-spacing: .10em;\n\tfont-weight: 900;\n}\n.sub-header {\n\tfont-size: 16px;\n\tcolor: #6e9ad0;\n}'
    );
    const faImport = (
      '<!-- FONT AWESOME ICONS -->\n<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">'
    );
    const leftCol = (
      '<div class="left-col">\n\t<div class="big-headings">\n\t\t<div class="bh-icon-circle">\n\t\t\t<div class="bh-icon">\n\t\t\t\t<i class="fa fa-graduation-cap" aria-hidden="true"></i>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'
    );
    const layoutLeftCol = (
      '.big-headings {\n\tdisplay: flex;\n\tmargin-bottom: 5px;\n}\n.bh-icon-circle {\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%;\n\tborder: 4px solid white;\n\tz-index: 2;\n\tmargin-top: -5px;\n\tmargin-left: -5px;\n\tbackground-color: #6e9ad0;\n}\n.bh-icon {\n\tcolor: white;\n\tmargin-top: 7px;\n\tmargin-left: 2px;\n\tfont-size: 20px;\n\ttext-align: center;\n}'
    );
    const contentArea = (
      '<div class="big-headings">\n\t<div class="bh-icon-circle">\n\t\t<div class="bh-icon">\n\t\t\t<i class="fa fa-graduation-cap" aria-hidden="true"></i>\n\t\t</div>\n\t</div>\n\t<div class="bh-component">\n\t</div>\n</div>'
    );
    const bhComponent = (
      '.bh-component {\n\tdisplay: flex;\n\tbackground-color: #bfd8e6;\n\tmargin-left: -10px;\n\tpadding-left: 20px;\n\tpadding-top: 4px;\n\tmargin-top: 3px;\n\twidth: 550px;\n\tmax-height: 32px;\n\tborder-top-right-radius: 15px;\n\tborder-bottom-right-radius: 15px;\n}'
    );
    const bhComponentHtml = (
      '<div class="bh-component">\n\t<span class="bh-text bh-description">Education</span>\n\t<span class="bh-text">2016</span>\n</div>'
    );
    const bhTextCss = (
      '.bh-text {\n\theight: 19px;\n\tfont-weight: bold;\n\ttop: 6px;\n\ttext-transform: uppercase;\n\tfont-size: 18px;\n\tfont-weight: 600;\n\tletter-spacing: .05em;\n}'
    );
    const bhDescriptionCss = (
      '.bh-description {\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\ttext-align: left;\n\tmin-width: 470px;\n}'
    );
    const bhWorkExperience = (
      '<div class="big-headings">\n\t<div class="bh-icon-circle">\n\t\t<div class="bh-icon">\n\t\t\t<i class="fa fa-briefcase" aria-hidden="true"></i>\n\t\t</div>\n\t</div>\n\t<div class="bh-component">\n\t\t<span class="bh-text bh-description">Work Experience</span>\n\t\t<span class="bh-text">2016</span>\n\t</div>\n</div>'
    );

    return (
      <ContentBox>
        <ContentBoxHeader 
          text='Getting Started'
          sourceLink='https://github.com/clevernyyyy/clevernyyyy.github.io'
          docsLink='https://github.com/clevernyyyy/clevernyyyy.github.io'
          docsName='Resume'
          paramStyle={styles.Header}
        />
        <ContentBoxParagraph>
          Building websites can be pretty complicated, but at its most basic it resembles a human being.
        </ContentBoxParagraph>

        <h2>html</h2>
        <ContentBoxParagraph>
          <code>HTML</code> is comparable to the skeletal structure of a person. It represents the makeup 
          of a person, how tall they are, how long their arms and legs are, etc. Often <code>HTML</code> is 
          referred to as <code>markup</code>, the terms will be used interchangeably in this document. We 
          will be using some of the most current constructs in <code>HTML 5.0</code>.
        </ContentBoxParagraph>

        <h2>css</h2>
        <ContentBoxParagraph>
          I often think of <code>CSS</code> as the skin and appearance of a person. It helps determine a 
          person's overall, look - skin-tone, eye-color, freckles, etc. <code>CSS</code> for a webpage is 
          extremely comparable - it's the styling of a webpage. We will be utilizing <code>CSS 3.0</code> for 
          our resume build.
        </ContentBoxParagraph>


        <h2>javascript</h2>
        <ContentBoxParagraph>
          If <code>HTML</code> is the skeleton, and <code>CSS</code> is the appearance of a person, 
          then <code>JavaScript</code> is the muscles.  <code>JavaScript</code> helps determine how a webpage 
          interacts with itself and the user. How it animates when a user scolls, or if a popup is used when 
          a user clicks a button. It is essential in most modern webpages, but we will avoid 
          using <code>JavaScript</code> in the resume static webpage for now. I'll have other posts that will 
          touch upon the its use later.
        </ContentBoxParagraph>


        <ContentBoxHeader 
          text='Scaffolding'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          Now that we've discussed some of the basic elements of our project, lets start! First we'll need to 
          setup a scaffolding that we can utilize. Let's create a main folder called <code>resume</code>. Inside 
          that folder, we will create two more folders (<code>images</code> and <code>styles</code>) and our 
          main <code>markup</code> file.  The <code>images</code> folder is for a picture of yourself if you'd 
          like. The <code>styles</code> folder is much more important. It contains the <code>CSS</code> for your 
          webpage. As you can see below, I like to break it up into sections, but more on that later. Move on once 
          your scaffolding represents below.
        </ContentBoxParagraph>
        <CodeMirror
          options={scaffoldingOptions}
          value={scaffoldingMarkup}
        />

        <ContentBoxHeader 
          text='Mocking up the Paper'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          Open up <code>index.html</code>, we will start there. If you haven't heard 
          of <a className={styles.Link} href='http://getbootstrap.com/'>bootstrap</a>, it is a popular HTML, CSS, and 
          JS framework for web development created by Twitter. Unless you plan on having extremely robust styles in 
          your own project, bootstrap is typically a good starting point. We will be bringing it in via a CDN, 
          otherwise known as a content delivery network.
        </ContentBoxParagraph>
        <ContentBoxParagraph>
          Let's mockup the HTML for our resume - the plan is to have a background with a "paper" resume on top.
          <CodeMirror
            options={codeMirrorOptions}
            value={htmlPaperMarkup}
          />
        </ContentBoxParagraph>
        <ContentBoxParagraph>
          That doesn't do much yet. Let's add some style!
        </ContentBoxParagraph>
        <ContentBoxParagraph>
          If you recall, we have some styling scaffolding. Typically for large projects I use a framework 
          called <a className={styles.Link} href="http://sass-lang.com/">sass</a>, which is a form of CSS, but for 
          this project I'm using vanilla css. Open up <code>app.css</code> and paste the following:
          <CodeMirror
            options={codeMirrorOptions}
            value={appCSS}
          />
        </ContentBoxParagraph>
        <ContentBoxParagraph>
          As you can see in our <code>index.html</code>, we're importing the <code>app.css</code> with this line.
          <CodeMirror
            options={codeMirrorOptions}
            value={cssImportHtml}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          And in turn, we're importing the colors, layouts, and text stylings. 
          Open up <code>layout/layout.css</code> and paste the following:
          <CodeMirror
            options={codeMirrorOptions}
            value={layoutCss}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Okay, now we finally have something to look at. Open up your <code>index.html</code> in your favorite 
          browser. Pretty boring, eh? You should see two grey stripes outside a large white stripe in the middle 
          of the page. Leave the file open in your browser, every change from here you should be able to simply 
          refresh the page to view the updates.
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Lets make this actually look like paper now. Let's add some padding in the <code>main</code> element 
          and a shadow to the <code>paper</code> class.
          <CodeMirror
            options={codeMirrorOptions}
            value={layoutCssPaper}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Refresh your page in the browser. Now that looks like a piece of paper, but let's make the background 
          a little more interesting. Modify the <code>main</code> styling to this:
          <CodeMirror
            options={codeMirrorOptions}
            value={layoutCssPaperMain}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Awesome! That radial-gradient is a cool effect you can use to highlight stuff centered within a page. 
          Okay, we're happy to see our paper well defined within the page, ready for some content now.
        </ContentBoxParagraph>


        <ContentBoxHeader 
          text='Creating Content within Paper Resume'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          Now it's time to add content to the paper. Let's start by splitting the resume into two columns. 
          First edit your <code>main</code> element inside the <code>index.html</code> file to this:
          <CodeMirror
            options={codeMirrorOptions}
            value={indexHtml}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Let's add the colors first so we can see what we are accomplishing. Head over 
          to <code>colors/colors.css</code> and paste in these simple classes:
          <CodeMirror
            options={codeMirrorOptions}
            value={colorsCss}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          If you refresh your page you should see a pink bar with the word "TEST" above the gold bar with the 
          word "NAME". Let's fix that; open up the <code>layout/layout.css</code> file and add the following 
          classes:
          <CodeMirror
            options={codeMirrorOptions}
            value={layoutCssCols}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Now when you refresh the page, you'll see the two columns. I think the grey looks nice, but I'll 
          probably remove the pink eventually. In fact, let's work on that grey section a little. I think it'd be 
          a great spot for a nice, big callout for our name and maybe we can stick the content in the pink section. 
          Edit the <code>right-col</code> section to this:
          <CodeMirror
            options={codeMirrorOptions}
            value={rightColHead}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Next edit the <code>text/text.css</code> file for the first time.
        <CodeMirror
            options={codeMirrorOptions}
            value={textCss}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Hmmm, notice anything that could present a problem? The text is right at (0,0) in the top, left 
          corner.  Let's add some padding by adding this line to end of the <code>right-col</code> class 
          in <code>layout/layout.css</code>.
        </ContentBoxParagraph>
        <ContentBoxParagraph>
          <code>padding: 20px 20px 20px 30px;</code>
        </ContentBoxParagraph>
        <ContentBoxParagraph>
          Now the top section of right column is really looking good! Let's move on to the left column 
          and start by creating some big headings.
        </ContentBoxParagraph>



        <ContentBoxHeader 
          text='Creating the big-headings'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          I would like to use icons within my "big-headings", so I have to import some. I prefer the 
          popular <a className={styles.Link} href="http://fontawesome.io/icons/">Font Awesome</a> icon set so 
          that's what I'll import through a CDN again. Place this line in your <code>index.html</code> below 
          the bootstrap css call, but above the app.css call:
          <CodeMirror
            options={codeMirrorOptions}
            value={faImport}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Next, let's go edit the <code>left-col</code> div to this:
          <CodeMirror
            options={codeMirrorOptions}
            value={leftCol}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          You'll notice two things - first we got rid of the pink class (feel free to also delete that 
          from <code>colors/colors.css</code>). Also, you'll see that font-awesome class <code>fa-graduation-cap</code>. 
          That's how you pull in a <a className={styles.Link} href="http://fontawesome.io/icons/">Font Awesome</a> icon - 
          more can be found <a className={styles.Link} href="http://fontawesome.io/icons/">here</a>.
        </ContentBoxParagraph>


        <ContentBoxParagraph>
          Now we'll need to edit <code>layout/layout.css</code> to update utilize this markup.
          <CodeMirror
            options={codeMirrorOptions}
            value={layoutLeftCol}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          If you refresh your browser, you will see a nice blue circle with a white icon in the center. 
          This is the start of our big-heading.
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Next, let's add the content area to the html:
          <CodeMirror
            options={codeMirrorOptions}
            value={contentArea}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          And add this section to the bottom of the <code>layout/layout.css</code>:
          <CodeMirror
            options={codeMirrorOptions}
            value={bhComponent}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          After refreshing, you should have a nice light-blue stripe protruding from the icon-circle. Let's add some 
          heading-content to the blue stripe. I'm thinking that we will use Education as our heading, and maybe let's 
          throw a date far right in the blue stripe. So edit the <code>bh-component</code> in <code>index.html</code> to this:
          <CodeMirror
            options={codeMirrorOptions}
            value={bhComponentHtml}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Add the <code>bh-text</code> class to the <code>text/text.css</code> file.
          <CodeMirror
            options={codeMirrorOptions}
            value={bhTextCss}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          And add the <code>bh-description</code> class to the <code>layout/layout.css</code> file.
          <CodeMirror
            options={codeMirrorOptions}
            value={bhDescriptionCss}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          When you refresh, you'll see your first big-header! Let's add another section below the Education big-heading.
          <CodeMirror
            options={codeMirrorOptions}
            value={bhWorkExperience}
          />
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          The <code>html</code> portion is relatively large and you'll notice that all that changes between the sections is 
          the icon class from <code>fa-graduation-cap</code> to <code>fa-briefcase</code> and the <code>bh-description</code> from 
          Education to Work Experience. You're touching upon a flaw within vanilla html/css projects. This is one of the reasons 
          that other frameworks exist. Imagine a big-heading component, where we just send in an <code>icon-class</code>, 
          a <code>description</code>, and a <code>date</code>. This is the advantage of frameworks 
          like <a className={styles.Link} href="https://facebook.github.io/react/">ReactJS</a>, which I also plan to create a 
          tutorial for.
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          After a refresh, you'll see that we have two very nice, distinct big headers and we're well on our way to creating on 
          our web resume.  Now that we've covered the basics, you should be able to continue on and create your own online resume.
          If you need ideas, I recommend clicking the <a className={styles.Link} href="">Resume</a> link in the top right corner 
          of this page, or for the complete source click <a className={styles.Link} href="">here</a>.
        </ContentBoxParagraph>


      </ContentBox>
    );
  }
}