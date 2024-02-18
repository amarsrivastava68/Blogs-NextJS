const DUMMY_POSTS = [
    {
      slug: "getting-started-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt : 'It is a react framework for production and it maked better use of pre rendering properties of react js  ',
      date : '2022-03-10',
    },
  ];

import AllPosts from "./all-posts"

function AllPostsPage() {

   return <AllPosts posts = {DUMMY_POSTS} />
}

export default AllPostsPage
