import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * This will bind the routes to an appropriate handler in the
 * given Express app.
 * @param {Express} The app Express appl.
 * @author PT Mashingaidze <https://github.com/perfecttinotenda>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
