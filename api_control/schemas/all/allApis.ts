import { JSONSchemaType } from "ajv"

interface IAllApis {
	people: string
	planets: string
	films: string
	species: string
	vehicles: string
	starships: string
}

const allApis: JSONSchemaType<IAllApis> = {
    type: "object",
    properties: {
        people: { type: "string" },
        planets: { type: "string" },
        films: { type: "string" },
        species: { type: "string" },
        vehicles: { type: "string" },
        starships: { type: "string" }
    },
    required: ["people", "planets", "films", "species", "vehicles", "starships"],
}

export default allApis;