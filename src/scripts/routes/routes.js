import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import PredictPage from '../pages/predict/predict-page';
import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import ResultPage from '../pages/result/result-page';

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
  '/predict': new PredictPage(),
  '/login': new LoginPage(),
  '/register': new RegisterPage(),
  '/result': new ResultPage(),
};

export default routes;
