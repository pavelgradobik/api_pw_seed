import { execSync } from 'child_process'

async function globalSetup(/** config: FullConfig */) {
    execSync(`npx openapi-typescript ${someurl-to-the-swagger-resourse} --output ./.temporary-folder-for-the-refreshed-types/types.ts`, { stdio: 'inherit' })
}

export default globalSetup;