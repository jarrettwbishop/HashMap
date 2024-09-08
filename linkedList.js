import Node from "./node.js";
export default function LinkedList() {
	let head = {key: null, value: null, pointer: null};

	const append = (value) => {
		if (head == null) {
			head = Node(value, null)
		} else {
			let currentNode = head;
			while(currentNode.pointer !== null) {
				currentNode = currentNode.pointer;
			}
			currentNode.pointer = Node(value, null)
		}

	}

	const prepend = (value) => {
		let tmpNode = Node(value, head);
		head = tmpNode;
	}

	const size = () => {
		let count = 0;
		let currentNode = head;
		while(currentNode.pointer !== null) {
			count++;
			currentNode = currentNode.pointer;
		}
		return count;
	}

	const headNode = () => {
		return head;
	}

	const tailNode = () => {
		let currentNode = head;
			while(currentNode.pointer !== null) {
				currentNode = currentNode.pointer;
			}
		return currentNode;
	}

	const at = (index) => {
		if (index < 0) return;
		if (index = 0) return head;
		let currentNode = head;
		for(let i = 0; i < index; i++) {
			currentNode = currentNode.pointer;

		}
		return currentNode;
	}

	const pop = () => {
		let currentNode = at(size() - 1);
		currentNode.pointer = null;
	}

	const contains = (value) => {
		let currentNode = head;
		while(currentNode.pointer !== null) {
			if (currentNode.value == value) {
				return true;
			}
		}
		return false;
	}

	const find = (value) => {
		let count = 0;
		let currentNode = head;
		while(currentNode.pointer !== null) {
			if (currentNode.value == value) {
				return count;
			}
			count++;
		}
		return null;
	}

	const toString = () => {
		let output = head.value;
		let currentNode = head;
		while (currentNode.pointer !== null) {
			currentNode = currentNode.pointer;
			output += ` -> ${currentNode.value}`
		}
		output += ` -> null`
		console.log(output);
	}

	return {
		head,
		append,
		prepend,
		size,
		headNode,
		tailNode,
		at,
		pop,
		contains,
		find,
		toString
	}
}
