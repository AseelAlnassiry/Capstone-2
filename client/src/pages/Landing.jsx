import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="text-secondary">Nourish</span> Your <span className='text-warning'>Week</span>
          </h1>
          <p className="mb-5 lg:text-xl">
            Get Your Perfect Plate: Tailored weekly meal plans to fuel your
            body, your goals, and your life. Say goodbye to guesswork and hello
            to delicious, nutritious eats!
          </p>
          <Link to={'/register'} className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};
export default Landing;
