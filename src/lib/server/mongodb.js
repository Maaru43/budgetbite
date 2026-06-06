import { MongoClient } from 'mongodb';
import { MONGODB_URI, MONGODB_DB } from '$env/static/private';

if (!MONGODB_URI) {
	throw new Error('MONGODB_URI fehlt in der .env Datei.');
}

const client = new MongoClient(MONGODB_URI);

let clientPromise;

export async function getDb() {
	if (!clientPromise) {
		clientPromise = client.connect();
	}

	const connectedClient = await clientPromise;
	return connectedClient.db(MONGODB_DB || 'budgetbite');
}