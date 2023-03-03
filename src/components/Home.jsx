import RandomDrink from './RandomDrink';

export default function Home() {

  return (
    <div className='Home'>
      <div className="home-card">
        <h1 id="welcome">Welcome</h1>
        <p>Unsure what to order at the bar? Feel like mixing something up at home? We've got you! If you're in a rush..</p>
        <RandomDrink />
      </div>
    </div>
  );
}