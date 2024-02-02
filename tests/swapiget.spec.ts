import { request, test } from '@playwright/test';
import AllApiController from '../api_control/controllers/allApiController';
import { ApiClient } from '../api_control/apiClient';

test.describe('As a user I could expose', () => {

    // ---->>>>>>   Omit<importtedSchema['schemaname'], 'Id'>

    
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

		// const allApis = AllApiController.getAllApi();
		// console.log(allApis);

        const client = new ApiClient.loginAsBasicAuth('username', 'password');
        const response = await client.allApiController.getAllApi(); // 
	});
});
