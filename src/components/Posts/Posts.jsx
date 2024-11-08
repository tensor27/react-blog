import PostBar from './PostBar/PostBar'
import Styles from './Posts.module.css'
import PostsList from './PostsList/PostsList'

function Posts() {
	return (
		<div className={Styles['posts-wrapper']}>
			<PostBar />
			<PostsList />
		</div>
	)
}

export default Posts
