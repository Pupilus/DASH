import faker from 'faker';

export const randomUsers = (count = 10) => {
	const arr = [];
	for (let i = 0; i < count; i++) {
		arr.push({
			key: faker.random.uuid(),
			avatar: faker.image.avatar(),
			name: faker.name.firstName(),
			title: faker.lorem.sentence(),
			context: faker.lorem.sentences(),
			date: '2010-11-' + (i + 1),
			clicks: faker.random.number(),
			likes: faker.random.number(),
			comments: faker.random.number(),
		});
	}

	return arr;
};
