
const BASE_URL = "http://localhost:8080/api/employee/getdata"

export const getEmployee = async (params = {}) =>{
    const query = new URLSearchParams(params).toString();
  
    const res = await fetch(`${BASE_URL}/getEmployee?${query}`)
    return res.json()
}