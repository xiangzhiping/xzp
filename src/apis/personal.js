import {get} from '../utils/requester.js'

export const personalAvatarLinkGet = async () => {
    return await get('/xzp/personal/avatar/download/link/get')
};


export const personalAvatarDownload = async (link) => {
    return await get(link, {}, {responseType: 'blob'})
};

