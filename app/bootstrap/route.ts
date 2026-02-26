import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const BOOTSTRAP_MD = readFileSync(join(process.cwd(), 'public', 'bootstrap.md'), 'utf8')

export async function GET() {
  return new Response(BOOTSTRAP_MD, {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  })
}
