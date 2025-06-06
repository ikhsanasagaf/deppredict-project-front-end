import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import PredictPage from '../pages/predict/predict-page';
import LoginPage from '../pages/auth/login/login-page';

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
  '/predict': new PredictPage(),
  '/login': new LoginPage(),
};

export default routes;
