const Footer = () => {
   return (
      <footer>
         <div className='h-14 bg-black text-white flex items-center justify-center text-sm sm:text-base text-center px-2'>
            <p className="font-bold">&copy; {new Date().getFullYear()} Cyber Crime Unit BNCC (Unofficial).</p>
         </div>
      </footer>
   );
};

export default Footer;
