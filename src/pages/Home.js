import Hero from "../components/Hero";

const Home = () => {
    return ( 
        <main>
            <Hero 
                className='padding hero__home'
                header='Great coffee made simple.'
                text='Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.'
            />
        </main>
     );
}
 
export default Home;