import RandomDrink from './RandomDrink';

export default function Home() {

  return (
    <div className='Home'>
      <div className="home-card">
        <h1 id="welcome">Welcome</h1>
        <p>Feel like making a drink at home? Or just unsure what to order at the bar? We've got you</p>
        <RandomDrink />
      </div>
    </div>
  );
}