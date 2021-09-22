import axios from 'axios';

const VISITOR_API_BASE_URL = "jdbc:postgresql://ec2-52-6-77-239.compute-1.amazonaws.com:5432/dess7pm4up3igd/api/v1/visitors";

class VisitorService {

    getVisitors() {
        return axios.get(VISITOR_API_BASE_URL);
    }
}

export default new VisitorService();