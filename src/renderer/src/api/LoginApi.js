import Request from "@/api/baseApi/Request"

class LoginApi {
    entranceMapping = '/entrance';

    async login(userName, password) {
        return new Request({
            url: this.entranceMapping + '/login',
            method: 'POST',
            data: {
                userName,
                password
            }
        }).send().then(res => {
            if (res.status === 'success') {
                return res.data;
            }
            return false;
        })
    }

    async register(userName, password) {
        return new Request({
            url: this.entranceMapping + '/register',
            method: 'POST',
            data: {
                userName,
                password
            }
        }).send().then(res => {
            return res.status === 'success';
        });
    }
}

export default new LoginApi();