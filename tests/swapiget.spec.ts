import { request, test } from '@playwright/test';
import AllApiController from '../api_control/controllers/allApiController';

test.describe('As a user I could expose', () => {
	test('I could expose all apis presented', async ({ request }) => {
		// const clientAuth = await Client.authorization({somecredentials/ login-pass})
		// const clientUnAuth = await client.unauthorized()
		// const clientResponse = clientUnAuth.(planets, people, films, species, vehicles, starships).(getAll, getById(iD), postPlanet({body}/body), putPlanet({body}/body), deletePlanetById(iD))

		// Client should have a response validator
		// GEt POST PUT ... should be based on the schema
		//

		// const allApis = await request.get('')
		// const allApisBody = await allApis.json();
		// console.log(allApisBody)

		const allApis = AllApiController.getAllApi();
		console.log(allApis);
	});
});
