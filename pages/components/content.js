import React from 'react'

import Thumbnail from './articles/Thumbnail'
import ThumbnailLayout from './ThumbnailLayout'
import IDTech from './articles/idtech'
import Section from './Section'
import Indent from './Indent.js';

export default () => (
  <prop className="content">
    <Section name="Projects and Contributions">
      <ThumbnailLayout>
        <Thumbnail link="https://chrome.google.com/webstore/detail/ytclean-modern-youtube-th/ibnledgdeclbdgjbjlmllphepfbopnmg" image="https://lh3.googleusercontent.com/ZBMp7-i1gsqyCM5qYCSjdv4UNERu333GStdQY0OjmVYPfBZ943VRAKnoK5pqKr7ViwO9gBu_=s1280-h800-e365-rw" title="ytClean" content="A clean, modern look and feel for YouTube with over one hundred active users." />
        <Thumbnail image="/static/staffportal.png" link="https://github.com/tcdg/staffportal" title="TCDG StaffPortal" content="A community-driven project to aid in monitoring and moderating popular discussion like Discord and Slack." />
        <Thumbnail image="/static/mydiscord.png" link="https://github.com/justinoboyle/mydiscord" title="MyDiscord" content="A fork of BeautifulDiscord, MyDiscord is a lightweight expansion and plugin engine which allows custom styles and scripts to be run in the popular chat application Discord." />
        <Thumbnail image="/static/forwardus.png" link="https://blog.justinoboyle.com/forwardus" title="Forwardus" content="Forwardus is a multi-platform, work-in-progress application which uses uPnP to easily forward ports and create firewall rules." />
      </ThumbnailLayout>
      <ThumbnailLayout>
        <Thumbnail image="/static/nigeria.png" link="https://nigeria.justinoboyle.com" title="School Nigeria Project" content="An example of a typical school report placed in the format of a responsive web page with graphics and crisp text." />
        <Thumbnail image="/static/slsk.png" link="https://github.com/justinoboyle/slsk-node/" title="slsk-node" content="An open-source (incomplete) Node.js driver for the proprietary Soulseek protocol, used for P2P file sharing." />
        <Thumbnail image="/static/yalu.png" link="https://github.com/kpwn/yalu102/" title="yalu102" content="An open-source, community-driven iOS 10.2 jailbreak using Luca Todesco and Marco Grassi's KPP bypass. My contributions: Documentation, community management and source code tweaks." />
      </ThumbnailLayout>
    </Section>
    <Section name="Groups and Organizations">
      <ThumbnailLayout>
        <Thumbnail link="https://nfmstudios.com/" image="/static/nfm.png" title="NFM Studios" content="Founded in the summer of 2016, we crafted our team, and our goal that we will take an active role in web development to help the eSports industry." />
        <Thumbnail link="https://github.com/TCDG" image="https://avatars2.githubusercontent.com/u/20982325?v=3&s=200" title="The Collective Developers" content="The Collective Development Group was founded in 2016 as part of an initiative to develop open-source applications." />
        <Thumbnail link="https://www.youtube.com/watch?v=BsljfJ-BiK8" image="/static/genesis.jpg" title="GenesisEDM / Lyriqua (inactive)" content="A YouTube channel designed to bring fresh, underground music with beautiful visuals." />
        <Thumbnail link="https://www.youtube.com/user/LightCraftBT" image="https://pbs.twimg.com/profile_images/555984353251966976/tEGFi-0r.png" title="LightCraft Build Team (inactive)" content="An innovative group of artists and developers creating beautiful 3D interactive worlds for users to explore using the platform of the popular video game Minecraft." />
      </ThumbnailLayout>
    </Section>
    <Section name="Recent Blog Posts">
      <ThumbnailLayout>
        <Thumbnail title="A Simple Node Boilerplate with Babel and ES6 Support" content="Babel is a pain to setup I've created a very simple Node + Babel boilerplate without the confusing mess." />
        <Thumbnail title="Multithreading, Node and Safe Code Evaluation" content="Three things that typically don't go together. Node is asynchronous but does not have multithread support, which means that for most things, you can write simple, concise code that doesn't block IO..." />
      </ThumbnailLayout>
    </Section>
    <Section name="ID Tech Summer Camp">
      <Indent>
        <Section name="2016">
          <ThumbnailLayout>
            <Thumbnail image="/static/centipede.png" title="Project: Centipede game recreated in Python" content="Babel is a pain to setup I've created a very simple Node + Babel boilerplate without the confusing mess." />
            <Thumbnail title="Multithreading, Node and Safe Code Evaluation" content="Three things that typically don't go together. Node is asynchronous but does not have multithread support, which means that for most things, you can write simple, concise code that doesn't block IO..." />
          </ThumbnailLayout>
        </Section>
      </Indent>
    </Section>
  </prop>
)
// <Thumbnail image="/static/thisproject.png" link="https://github.com/justinoboyle/portfolio" title="This Portfolio" content="Written in JavaScript, using Node.js, React, Babel, Next.js and Bootstrap. Source code available on GitHub." />
