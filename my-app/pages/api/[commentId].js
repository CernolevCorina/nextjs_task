async function getComments() {
	const res = await fetch(`https://my-json-server.typicode.com/typicode/demo/comments`)
	const data = await res.json()

	return data;
}

export default async function handler(req, res) {
	const comments = await getComments();
	const { commentId } = req.query
	const comment = comments.find((comment)=> comment.id === parseInt(commentId))
	res.status(200).json(comment)
}