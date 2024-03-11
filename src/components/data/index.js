import { faker } from '@faker-js/faker'

export function createRandomUser() {
	return {
		// userId: faker.string.uuid(),
		fullName: faker.person.fullName(),
		email: faker.internet.email(),
		profile: faker.image.avatar(),
		password: faker.internet.password(),
		age: faker.number.int(40),
		phone: faker.phone.number(),
		job: faker.person.jobType(),
		visits: faker.number.int(100),
		progress: faker.number.int(100),
		registeredAt: faker.date.past(),
	}
}

export const USERS = faker.helpers.multiple(createRandomUser, {
	count: 100,
})

export const Data = {
	channel: ['PC', 'Mobile App', 'Web App'],
	posting: ['posting', 'posted', 'Waiting for Approval', 'Approval denied', 'Approved'],
}
