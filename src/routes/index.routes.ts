import * as controller from '@controllers/controller';

import { Router } from 'express';
const router = Router();

router.get('/api', (req, res) => {
	res.json({ message: 'Welcome to my API' });
});

router.get('/getX', controller.getX);
router.post('/postX', controller.postX);
router.put('/putX', controller.putX);
router.delete('/deleteX', controller.deleteX);
router.patch('/patchX', controller.patchX);

export default router;
