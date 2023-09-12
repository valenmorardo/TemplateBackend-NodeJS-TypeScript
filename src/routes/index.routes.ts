/* import * as controller from '@controllers/allControllers';
 */
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.json({ message: 'Welcome to my API' });
});


export default router;
