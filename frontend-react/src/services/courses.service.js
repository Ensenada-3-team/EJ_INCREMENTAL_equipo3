import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/courses/";


export default class CoursesService {
      async getUserCourses(userId) {
            try {
                  const response = await axios.get(`${API_URL}/user/${userId}`, { headers: authHeader() });
                 
                  return response.data;
            } catch (error) {
                  if (error.response) {
                        throw new Error(error.response.data.message);
                  } else {
                        throw error;
                  }
            }
      }

      async addCourse(userId, newCourse) {
            try {
                  const response = await axios.post(`${API_URL}/user/${userId}`, newCourse, { headers: authHeader() });
                  return response.data;
                  
            } catch (error) {
                  if (error.response) {
                        throw new Error(error.response.data.message);
                  } else {
                        throw error;
                  } 
            }
      }

      async updateCourse(userId, courseId, newCourse) {
            try {
                  const response = await axios.put(`${API_URL}/user/${userId}/courses/${courseId}`, newCourse, { headers: authHeader() });
                  return response.data;
            } catch (error) {
                  if (error.response) {
                        throw new Error(error.response.data.message);
                  } else {
                        throw error;
                  }
            }
      }

      async deleteCourse (userId, courseId) {
            try {
                  const response = await axios.delete(`${API_URL}/user/${userId}/courses/${courseId}`, { headers: authHeader() });
                  return response.data;
            } catch (error) {
                  if (error.response) {
                        throw new Error(error.response.data.message);
                  } else {
                        throw error;
                  }
            }
      }


}

