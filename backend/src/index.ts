import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {userRouter} from './routes/user'
import {blogRouter} from './routes/blog'

import {decode,sign,verify} from 'hono/jwt'



const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()
app.use('/api/*', cors())
app.route('/api/v1/user',userRouter);
app.route('/api/v1/blog',blogRouter)

export default app
