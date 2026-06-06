import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { getDb } from '$lib/server/mongodb.js';

function normalizeMeal(meal) {
	return {
		...meal,
		id: meal._id.toString(),
		_id: meal._id.toString()
	};
}

export async function GET({ params }) {
	const db = await getDb();
	const mealId = params.meal_id;

	if (!ObjectId.isValid(mealId)) {
		return json({ message: 'Ungültige Mahlzeit-ID.' }, { status: 400 });
	}

	const meal = await db.collection('meals').findOne({
		_id: new ObjectId(mealId)
	});

	if (!meal) {
		return json({ message: 'Mahlzeit nicht gefunden.' }, { status: 404 });
	}

	return json(normalizeMeal(meal));
}

export async function DELETE({ params }) {
	const db = await getDb();
	const mealId = params.meal_id;

	if (!ObjectId.isValid(mealId)) {
		return json({ message: 'Ungültige Mahlzeit-ID.' }, { status: 400 });
	}

	const result = await db.collection('meals').deleteOne({
		_id: new ObjectId(mealId)
	});

	if (result.deletedCount === 0) {
		return json({ message: 'Mahlzeit nicht gefunden.' }, { status: 404 });
	}

	return json({ success: true });
}