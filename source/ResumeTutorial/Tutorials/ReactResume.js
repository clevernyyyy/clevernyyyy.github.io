/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../../demo/ContentBox'
import '../ResumeTutorial.css';

export default class ReactTutorial extends Component {

  render () {
    return (
      <ContentBox>
          <ContentBoxHeader text='Resume React Tutorial'/>
          <ContentBoxParagraph>
            This section is currently being built.  Will update soon!
          </ContentBoxParagraph>
      </ContentBox>
    );
  }
}