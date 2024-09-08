export default function Node(key, value, pointer) {
	return { 
        key: key || null,
		value: value || null, 
		pointer: pointer || null
	};
}
