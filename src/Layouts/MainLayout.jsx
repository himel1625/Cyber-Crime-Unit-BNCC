import App from '../App.jsx';
import Footer from '../Components/Footer/Footer.jsx';
const MainLayout = () => {
   return (
      <div>
       <header>
         
         </header>
         <main className='min-h-[calc(100vh-30px)]  w-full'>
            <App />
         </main>
         <footer>
            <Footer />
         </footer>
      </div>
   );
};

export default MainLayout;
