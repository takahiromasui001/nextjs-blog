import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'
import MyDate from '../../components/myDate'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <br />
        <div className={utilStyles.lightText}>
          <MyDate dateString={postData.date} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// export const getStaticProps = async ({ params }) => {
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export default Post
