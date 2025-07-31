import './About.less';

const About = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <div className="content">
        <p>
          This is a production-ready Single Page Application template built from
          scratch without Create React App or Vite.
        </p>

        <h2>Features</h2>
        <div className="features">
          <div className="feature">
            <h3>🚀 Modern Stack</h3>
            <p>React 19.1, TypeScript 5.7, Webpack 5.97</p>
          </div>

          <div className="feature">
            <h3>🎨 Styling</h3>
            <p>LESS with variables, nesting, and autoprefixer</p>
          </div>

          <div className="feature">
            <h3>🔧 Code Quality</h3>
            <p>ESLint, Prettier, Husky, lint-staged</p>
          </div>

          <div className="feature">
            <h3>📦 Optimization</h3>
            <p>Code splitting, lazy loading, tree shaking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
