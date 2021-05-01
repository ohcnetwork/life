import React, { useState } from 'react';
import Breadcumb from '@components/Breadcumb';
import Header from '@components/Header';
import remark from 'remark';
import html from 'remark-html';
import { NextSeo } from 'next-seo';

const markdownText = `

## Types of Contributions:

1. Code (Front-End) 
2. [Manpower (volunteers for verification)](https://docs.google.com/forms/d/e/1FAIpQLSe7pykUkolIHZiZYYacPqAEoWxVxCGTH5noJOyw9q-e21aaWw/viewform)
3. Amplification - Help spread the word on social media

## LIFE - React/NextJS Contributing Guide

### Ready to start

We welcome everyone to join in the construction of the project.
As a pre requirement, you need to have a preliminary understanding of React, this is a good [learning document for React](https://reactjs.org/docs/getting-started.html).

For basic operation of Git, you can refer to [GitHub's help documentation](https://help.github.com/en/github/using-git)

We are using NextJS developing the Website , [NextJS Docs](https://nextjs.org/docs) is an amazing place to get started and refer.

Any kind of Contributions is Accepted.

### Contributing

-   [Fork this repository](https://github.com/coronasafe/life) to your own account and then clone it.
-   Create a new branch for your changes: \`git checkout -b {BRANCH_NAME}\`.
-   You can either use \`npm or yarn\` as your package manager.

To Install Dependencies:


\`\`\`bash
# if using npm
npm install
# if yarn
yarn
\`\`\`

To Start Development Server

\`\`\`bash
# if using npm
npm run dev
# if yarn
yarn dev
\`\`\`


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.

To Create a Pull Request:

-   [Guide to Create a Pull Request](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/)
-   [Snippets for Creating a Pull Request](https://deepankarbhade.vercel.app/snippets/making-a-pull-request)

## Adding Translations

[For Adding a New Language](/locales/docs/adding-new-language.md)

For translations of Existing Language:
[Please Refer This](https://github.com/coronasafe/life/issues/109)

### Get stuck ?

-   Create new issue to tell us: [create issue](https://github.com/coronasafe/life/issues/new/choose).
-   Ask on [GitHub Discussions](https://github.com/coronasafe/life/discussions).

-   Feel Free to Ask on our Slack.

[<img src="https://i.imgur.com/V7jxjak.png">](http://slack.coronasafe.in/)
`;

const Campaigns = () => {
    const [htmlStr, setHtmlStr] = useState('');
    remark()
        .use(html)
        .process(markdownText)
        .then((t) => setHtmlStr(t.contents));
    const SEO = {
        title: `How to Contribute ? `,
        openGraph: {
            title: `How to Contribute ? `
        }
    };
    return (
        <section className="max-w-5xl mx-auto px-2">
            <NextSeo {...SEO} />
            <Breadcumb list={[{ href: null, name: 'How to Contribute' }]} />
            <Header title="How to Contribute" />
            <section className="flex flex-col mx-2 md:mx-6 pt-2 pl-4">
                <article className="prose lg:prose-xl dark:text-gray-100 text-gray-1000 prose-indigo">
                    <div dangerouslySetInnerHTML={{ __html: htmlStr }}></div>
                </article>
            </section>
        </section>
    );
};
export default Campaigns;
