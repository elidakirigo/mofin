export default function Button({ color, content }) {
	return <button className={`bg-${color}`}>{content}</button>
}
