import { faker } from '@faker-js/faker'

export function createRandomUser() {
	return {
		// userId: faker.string.uuid(),
		firstname: faker.person.firstName(),
		lastname: faker.person.lastName(),
		email: faker.internet.email(),
		profile: faker.image.avatar(),
		password: faker.internet.password(),
		age: faker.datatype.number(40),
		visits: faker.datatype.number(100),
		progress: faker.datatype.number(100),
		registeredAt: faker.date.past(),
	}
}

export const USERS = faker.helpers.multiple(createRandomUser, {
	count: 100,
})
