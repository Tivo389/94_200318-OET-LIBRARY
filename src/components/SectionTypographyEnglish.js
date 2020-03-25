import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SectionTypographyEnglish extends Component {
  render() {
    return (
      <>
        <code className="localeCode"><FontAwesomeIcon icon="language"/> EN-US</code>
        <h1>
          Heading One
          <span>Page Header / Max. 1</span>
        </h1>
        <h2>
          Heading Two
          <span>Section / Header</span>
        </h2>
        <h3>
          Heading Three
          <span>Section / Header / Sub</span>
        </h3>
        <h4>
          Heading Four
          <span>Element / Header</span>
        </h4>
        <h5>
          Heading Five
          <span>Element / Header / Sub</span>
        </h5>
        <h6>
          Heading Six
          <span>Element / Header / Tertiary</span>
        </h6>
        <hr/>
        <p>A paragraph (from the Ancient Greek παράγραφος paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of more than one sentence. [1][2] Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
        <hr/>
        <div className="typographyElementExample">
          <h4>Element Example /h4</h4>
          <div>
            <h5>Step 1: Alpha / h5</h5>
            <p>A paragraph (from the Ancient Greek παράγραφος paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of more than one sentence. [1][2] Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
          </div>
          <div>
            <h5>Step 2: Beta / h5</h5>
            <p>A paragraph (from the Ancient Greek παράγραφος paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of more than one sentence. [1][2] Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
            <p>A paragraph (from the Ancient Greek παράγραφος paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of more than one sentence. [1][2] Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
          </div>
          <div>
            <h5>Step 3: Charlie / h5</h5>
            <p>A paragraph (from the Ancient Greek παράγραφος paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of more than one sentence. [1][2] Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
            <p>A paragraph (from the Ancient Greek παράγραφος paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of more than one sentence. [1][2] Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
            <p>A paragraph (from the Ancient Greek παράγραφος paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of more than one sentence. [1][2] Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
          </div>
        </div>
      </>
    );
  }

}

export default SectionTypographyEnglish;
