import server from '../utils/requester';

export const imageCaptchaIdGet = async () => {
    return await server.get('/xzp/sys/image/captcha/id/get', {});
};

export const imageCaptchaImageGet = async (captcha_id) => {
    return await server.get('/xzp/sys/image/captcha/image/get', {captcha_id}, {responseType: 'blob'});
};

export const userAccountPasswordLogin = async (req) => {
    return await server.post('/xzp/user/login/account/password', req);
};
