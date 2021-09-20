import axios from 'axios';

const VISITOR_API_BASE_URL = "http://springpool.herokuapp.com";

class VisitorService {

    getVisitors() {
        return axios.get(VISITOR_API_BASE_URL);
    }
}

export default new VisitorService();