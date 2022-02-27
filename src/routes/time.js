import { Router } from 'express';
import cors from 'cors';

import { timePost } from '../controllers/time';
import { cacheControl } from '../middlewares/cache-control';

const router = Router();

router.post('/', cors(), cacheControl, timePost);

export default router;