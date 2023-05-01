import axios from "axios";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;

async function sha256(message) {
	// Convierte la cadena de texto en un ArrayBuffer
	const msgBuffer = new TextEncoder().encode(message);
	// Crea un hash SHA-256 usando el API de Crypto
	const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
	// Convierte el ArrayBuffer en un Array de bytes
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	// Convierte el Array de bytes en una cadena hexadecimal
	const hashHex = hashArray
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");
	return hashHex;
}

// Ejemplo de uso
// sha256("Hola, Mundo!").then((hash) => {
// 	console.log(hash);
// });

const timezone = async () => {
	const res = await axios.get("https://front.opperdev.com/api/timezone");
	const time = await res.data;
	return time.timezone;
};

sha256(privateKey + "," + publicKey + "," + timezone()).then((hash) => {
	return hash;
});

export default sha256;
