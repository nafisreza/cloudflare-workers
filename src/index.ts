import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx';

const app = new Hono()

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
})

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