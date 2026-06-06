import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

let client;
let clientPromise;

export async function getDb() {
	const uri = env.MONGODB_URI;
	const dbName = env.MONGODB_DB || 'budgetbite';

	if (!uri || (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://'))) {
		throw new Error('MONGODB_URI fehlt oder ist ungültig.');
	}

	if (!client) {
		client = new MongoClient(uri);
	}

	if (!clientPromise) {
		clientPromise = client.connect();
	}

	const connectedClient = await clientPromise;
	return connectedClient.db(dbName);
}