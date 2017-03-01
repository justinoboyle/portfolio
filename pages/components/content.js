import React from 'react'

import Thumbnail from './articles/Thumbnail'
import ThumbnailLayout from './ThumbnailLayout'
import IDTech from './articles/idtech'
import Section from './Section'

export default () => (
  <prop className="content">
  <Section name="Projects">
    <ThumbnailLayout>
      <Thumbnail link="https://chrome.google.com/webstore/detail/ytclean-modern-youtube-th/ibnledgdeclbdgjbjlmllphepfbopnmg" image="https://lh3.googleusercontent.com/ZBMp7-i1gsqyCM5qYCSjdv4UNERu333GStdQY0OjmVYPfBZ943VRAKnoK5pqKr7ViwO9gBu_=s1280-h800-e365-rw" title="ytClean" content="A clean, modern look and feel for YouTube with over one hundred active users." />
      <Thumbnail image="/static/staffportal.png" link="https://github.com/tcdg/staffportal" title="TCDG StaffPortal" content="a community driven project to aid in monitoring popular platforms like Discord Source code available on GitHub." />
      <Thumbnail image="/static/thisproject.png" link="https://github.com/justinoboyle/portfolio" title="This Portfolio" content="Written in JavaScript, using Node.js, React, Babel, Next.js and Bootstrap. Source code available on GitHub." />
      <Thumbnail image="/static/mydiscord.png" link="https://github.com/justinoboyle/mydiscord" title="MyDiscord" content="A fork of BeautifulDiscord, MyDiscord is a massive expansion which allows custom styles and scripts to be run in the popular chat application Discord." />
      <Thumbnail image="/static/forwardus.png" link="https://blog.justinoboyle.com/forwardus" title="Forwardus" content="Forwardus is a multi-platform, work-in-progress application which uses uPnP to easily forward ports and create firewall rules." />
      <Thumbnail image="/static/nigeria.png" link="https://nigeria.justinoboyle.com" title="School Nigeria Project" content="An example of a typical school report placed in the format of a responsive web page with graphics and crisp text." />
    </ThumbnailLayout>
  </Section>
  <Section name="Recent Blog Posts">
    <ThumbnailLayout>
      <Thumbnail title="A Simple Node Boilerplate with Babel and ES6 Support" content="Babel is a pain to setup I've created a very simple Node + Babel boilerplate without the confusing mess." />
      <Thumbnail title="Multithreading, Node and Safe Code Evaluation" content="Three things that typically don't go together. Node is asynchronous but does not have multithread support, which means that for most things, you can write simple, concise code that doesn't block IO..." />
    </ThumbnailLayout>
  </Section>
  <Section name="ID Tech">
    <IDTech />
  </Section>
  </prop>
)
