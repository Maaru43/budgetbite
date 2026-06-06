import { json } from '@sveltejs/kit';
import { getDb } from '$lib/server/mongodb.js';

export async function GET() {
	const db = await getDb();

	const meals = await db
		.collection('meals')
		.find({})
		.sort({ createdAt: -1 })
		.toArray();

	return json(
		meals.map((meal) => ({
			...meal,
			id: meal._id.toString(),
			_id: meal._id.toString()
		}))
	);
}

export async function POST({ request }) {
	const db = await getDb();
	const meal = await request.json();

	const newMeal = {
		name: meal.name,
		price: Number(meal.price),
		time: Number(meal.time ?? meal.timeMinutes),
		timeMinutes: Number(meal.time ?? meal.timeMinutes),
		category: meal.category,
		ingredients: Array.isArray(meal.ingredients)
			? meal.ingredients
			: String(meal.ingredients || '')
					.split(',')
					.map((item) => item.trim())
					.filter(Boolean),
		vegetarian: Boolean(meal.vegetarian),
		hearty: Boolean(meal.hearty),
		createdAt: new Date()
	};

	const result = await db.collection('meals').insertOne(newMeal);

	return json(
		{
			...newMeal,
			id: result.insertedId.toString(),
			_id: result.insertedId.toString()
		},
		{ status: 201 }
	);
}