/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './GithubTutorial.css';
import CodeMirror from 'react-codemirror'

require('codemirror/mode/jsx/jsx')

const codeMirrorOptions = {
  mode: 'jsx',
  theme: 'dracula'
}

export default class GithubTutorial extends Component {
  render () {
    const markup = (
      '<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8">\n\t\t<meta name="author" content="USERNAME">\n\t</head>\n\t<body>\n\t\t<h1>TEST</h1>\n\t</body>\n</html>'
    );

    return (
      <ContentBox>
        <ContentBoxHeader
          text='Github Tutorial'
          sourceLink='https://github.com/clevernyyyy/clevernyyyy.github.io'
          docsLink='https://github.com/clevernyyyy/clevernyyyy.github.io'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          One of the best tools you can have in your toolbox for development is github knowledge.  If you haven't 
          created an account yet, go to <a className={styles.Link} href='https://github.com/join'>github.com</a> and 
          create a new account.
        </ContentBoxParagraph>

        <ContentBoxHeader 
          text='What Is Github?'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          Github is an online project hosting company using Git for source control.  With github, you can access any 
          of your projects hosted on github from anywhere with an internet connection.  It uses source-control, so 
          you can see changes, revert them, comment on them, etc.  Also, you can invite others to work on your projects 
          with you, futher increasing productivity with github.  Github also allows each user to host a static page 
          online for anything.  This is the feature that we will focus on in this tutorial.
        </ContentBoxParagraph>


        <ContentBoxHeader 
          text='Hosting static page with Github'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          Github allows static hosting if you create a particular repository.  Start by creating a repository, shown below.
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          <img className={styles.Image} src='https://github.com/clevernyyyy/clevernyyyy.github.io/blob/master/demos/create_new_repository.png'/>
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Make sure to name your repository <code>USERNAME.github.io</code>.  This is how github knows that it is supposed 
          to use this repository to host your static page.
        </ContentBoxParagraph>

        <ContentBoxHeader 
          text='Hosting Content'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          Now let's create some content for your brand-new repository.  Start by creating an <code>index.html</code>.

          Next, edit your <code>index.html</code> to the following:
          <CodeMirror
            options={codeMirrorOptions}
            value={markup}
          />
        </ContentBoxParagraph>

        <ContentBoxHeader 
          text='Testing Content'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          Once, you have moved your <code>index.html</code> page into your <code>USERNAME.github.io</code> repository, you can simple 
          navigate to <a className={styles.Link} href='#components/GithubTutorial'>http://USERNAME.github.io</a> and you will see something 
          similar to <a className={styles.Link} href='https://clevernyyyy.github.io/demos/'>this page</a>.
        </ContentBoxParagraph>

      </ContentBox>
    );
  }
}