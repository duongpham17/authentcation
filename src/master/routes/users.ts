import express, {IRouter} from 'express';

import { find, create, update, remove } from '../controllers/users';

const router: IRouter = express.Router();

router.get('/', find);
router.post('/', create);
router.patch('/', update);
router.delete('/:id', remove);

export default router;