import Layout from '../components/Layout';

function Page({ data }) {
	return(
		<Layout>
			{data.map((element) => (
				<div key={element.id}>
					<span>Id: {element.id} </span>
					<span> Title: {element.title}</span>
				</div>
			))}
		</Layout>
	)
}

// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts`)
	const data = await res.json()

	// Pass data to the page via props
	return { props: { data } }
}

export default Page;