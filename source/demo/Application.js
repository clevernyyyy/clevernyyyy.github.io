/** @flow */
import Immutable from 'immutable'
import React, { Component, PropTypes } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import { HashRouter, Match, Redirect } from 'react-router'

import ComponentLink from './ComponentLink'
import styles from './Application.css'
import NavLink from './NavLink'

import Introduction from '../Introduction/Introduction'
import GithubTutorial from '../GithubTutorial/GithubTutorial'
import ResumeTutorial from '../ResumeTutorial/ResumeTutorial'
import HtmlResume from '../ResumeTutorial/Tutorials/HtmlResume'
import ReactResume from '../ResumeTutorial/Tutorials/ReactResume'

const COMPONENTS = {
  '/components/Introduction': Introduction,
  '/components/GithubTutorial': GithubTutorial,
  '/components/ResumeTutorial': ResumeTutorial,
  '/components/Tutorials/HtmlResume': HtmlResume,
  '/components/Tutorials/ReactResume': ReactResume
}

export default class Application extends Component {
  render () {
    return (
      <HashRouter>
        <div className={styles.demo}>
          <div className={styles.headerRow}>
            <div className={styles.logoRow}>
              <div className={styles.ReactVirtualizedContainer}>
                <div className={styles.PrimaryLogoText}>
                  clevernyyyy
                </div>
                <div className={styles.SecondaryLogoText}>
                  .github.io
                </div>
              </div>

              <ul className={styles.NavList}>
                <NavLink href='https://github.com/clevernyyyy/clevernyyyy.github.io'>Source</NavLink>
                <NavLink href='https://github.com/clevernyyyy/'>Github</NavLink>
                <NavLink href='http://adamschaal.com'>More About Me</NavLink>
              </ul>
            </div>

            <div className={styles.ComponentList}>
              <ComponentLink to='/components/Introduction'>Introduction</ComponentLink>
              <ComponentLink to='/components/GithubTutorial'>Github.io Tutorial</ComponentLink>
              <ComponentLink to='/components/ResumeTutorial'>Resume Tutorial</ComponentLink>

              <Match
                exactly
                pattern='/components/ResumeTutorial'
                render={() => (
                  <Redirect to='/components/Tutorials/HtmlResume' />
                )}
              />
            </div>

            <Match
              pattern='/components/Tutorials'
              render={() => (
                <div className={styles.HighOrderComponentList}>
                  <ComponentLink to='/components/Tutorials/HtmlResume'>HTML Resume</ComponentLink>
                  <ComponentLink to='/components/Tutorials/ReactResume'>React Resume</ComponentLink>
                </div>
              )}
            />
          </div>

          <div className={styles.Body}>
            <div className={styles.column}>
              {Object.keys(COMPONENTS).map((route) => (
                <Match
                  component={COMPONENTS[route]}
                  key={route}
                  pattern={route}
                />
              ))}
              <Match
                exactly
                pattern='/'
                render={() => (
                  <Redirect to='/components/Introduction' />
                )}
              />
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }
}
