import axios from 'axios';

export default axios.create({
  baseURL: `https://exqure.herokuapp.com/api`,
});
