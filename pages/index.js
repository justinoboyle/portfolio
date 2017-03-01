import React from 'react'
import Header from './components/header'
import Content from './components/content'

import stylesheet from './style.scss'

import { container } from 'react-bootstrap'

// or, if you work with plain css
// import stylesheet from './style.css'

export default () =>
  <div>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="container">
      <Header />
      <Content />
    </div>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
  </div>
