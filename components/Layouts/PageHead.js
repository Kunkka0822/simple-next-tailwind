import React from 'react';
import Head from 'next/head';

const PageHead = ({
  title = 'Next + Tailwind Css Project',
  description = 'This is test task',
  keywords = 'Next, Tailwind, css, project, test, navbar',
  thumbnail = '',
}) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} key="keywords" />
      <meta property="og:title" content={title} key="og:title" />
      {!!thumbnail && (
        <meta property="og:image" content={thumbnail} key="og:image" />
      )}
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta
        name="twitter:card"
        content={thumbnail ? 'summary_large_image' : 'summary'}
        key="twitter:card"
      />
    </Head>
  );
};

export default PageHead;
