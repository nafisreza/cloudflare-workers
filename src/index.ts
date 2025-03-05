import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from cloudflare workers!')
})

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log('req header: ',c.req.header("Authorization"));
  console.log('req param: ',c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app