/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader } from '../demo/ContentBox'
import './ResumeTutorial.css';

export default class ResumeTutorial extends Component {

  render () {
    return (
      <ContentBox>
          <ContentBoxHeader text='Resume Tutorial'/>
      </ContentBox>
    );
  }
}