import Link from 'next/link'
import classes from './post-item.module.css'
import Image from 'next/image'

function PostItem(props) {

    const { title , image , excerpt , date , slug } = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-US' , {
        day: 'numeric' , 
        month : 'long' , 
        year : 'numeric'
    })

    const imagePath = `/images/posts/${slug}/${image}`

return <li className={classes.post}>
    <Link>
    <a href='/'>
        <div className={classes.image}>
            <Image src={image} alt ='image title' width ={300} height ={200}/>
        </div>
        <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
        </div>
    </a>
    
    </Link>

</li>
}

export default PostItem