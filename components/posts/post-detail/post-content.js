import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = 
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    content : '# This is a first Post ' , 
    date : '2022-03-10',
  }

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return <article className={classes.content} >

    <PostHeader  title = {DUMMY_POST.title} image = {imagePath} />
   <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown> 
  </article>
}

export default PostContent