import {get, post} from '../utils/requester.js'

export const userQuery = async (req) => {
    return await get('/xzp/user/query', req)
};


