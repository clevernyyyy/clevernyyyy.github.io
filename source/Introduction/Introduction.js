/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './Introduction.css';

export default class Introduction extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  render () {
    return (
      <ContentBox>
        <ContentBoxHeader
          text='Introduction'
          sourceLink='https://github.com/clevernyyyy/clevernyyyy.github.io'
          docsLink='https://github.com/clevernyyyy/clevernyyyy.github.io'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          My name is Adam, and I have created this site to help beginners learn web development.  
          I think it is important that even if you have limited development skills, you understand how 
          to create a website and host a static site for any purpose.
        </ContentBoxParagraph>
        
        <ContentBoxParagraph>
          On this site, you'll find basic tutorials for:

          <ul>
            <li>Hosting a static site on a github.io account.</li>
            <li>Building a static resume site from <code>HTML</code>, <code>CSS</code> and <code>Javascript</code>.</li>
          </ul>  
        </ContentBoxParagraph>

        <ContentBoxHeader 
          text='Summary'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          This site has been created by <a className={styles.Link} href='https://github.com/clevernyyyy/'>clevernyyyy</a> to 
          help any beginner who would like to practice web development or spin up a quick site for a challenge or problem.  
          Reference these tutorials for training and some code snippets, but for the full source code or the documentation, click on the links 
          found in the top right.
        </ContentBoxParagraph>
        
        <ContentBoxParagraph>
          It will also teach basic <code>HTML</code> and <code>CSS</code> elements, 
          and show how these can be improved upon with some beginner <code>ReactJS</code>.  
          If you have any questions or issues for this repository, please create a git 
          issue found <a className={styles.Link} href='https://github.com/clevernyyyy/clevernyyyy.github.io/issues'>here</a>.
          Also, feel free to request other tutorials by visiting that link and creating a new issue.
        </ContentBoxParagraph>


      </ContentBox>
    );
  }
}