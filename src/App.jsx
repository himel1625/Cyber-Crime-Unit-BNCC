import React from 'react';

const App = () => {
   return (
      <div className='min-h-screen bg-gray-100 text-gray-800 font-sans'>
         {/* Header */}
         <header className='bg-green-900 text-white p-4 shadow'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
               <h1 className='text-2xl font-bold'>BNCC</h1>
               <nav className='space-x-4'>
                  <a href='#about' className='hover:underline'>
                     About
                  </a>
                  <a href='#mission' className='hover:underline'>
                     Mission
                  </a>
                  <a href='#contact' className='hover:underline'>
                     Contact
                  </a>
               </nav>
            </div>
         </header>

         {/* Hero Section */}
         <section className='bg-green-700 text-white py-20 text-center'>
            <h2 className='text-4xl font-bold mb-4'>Bangladesh National Cadet Corps (BNCC)</h2>
            <p className='max-w-xl mx-auto text-lg'>
               A disciplined, patriotic, and self-reliant youth organization working for the
               development of Bangladesh.
            </p>
         </section>

         {/* About Section */}
         <section id='about' className='py-16 px-6 md:px-20 bg-white'>
            <h3 className='text-3xl font-semibold mb-4'>About BNCC</h3>
            <p className='text-lg leading-relaxed'>
               The BNCC is a tri-services organization comprising the Army, Navy, and Air Force
               wings. It trains students in leadership, discipline, and national service. BNCC plays
               a key role in volunteer activities, disaster management, and promoting patriotism
               among students across Bangladesh.
            </p>
         </section>

         {/* Mission Section */}
         <section id='mission' className='py-16 px-6 md:px-20 bg-gray-100'>
            <h3 className='text-3xl font-semibold mb-4'>Our Mission</h3>
            <ul className='list-disc pl-6 space-y-2 text-lg'>
               <li>To build a disciplined, self-reliant youth force.</li>
               <li>To instill leadership and patriotism in students.</li>
               <li>To serve during natural disasters and emergencies.</li>
               <li>To support the armed forces in times of national need.</li>
            </ul>
         </section>

         {/* Contact Section */}
         <section id='contact' className='py-16 px-6 md:px-20 bg-white'>
            <h3 className='text-3xl font-semibold mb-4'>Contact Us</h3>
            <p className='text-lg'>📍 BNCC Headquarters, Dhaka, Bangladesh</p>
            <p className='text-lg'>📧 Email: contact@bncc.gov.bd</p>
            <p className='text-lg'>📞 Phone: +880-1234-567890</p>
         </section>

         {/* Footer */}
         <footer className='bg-green-900 text-white text-center p-4'>
            &copy; {new Date().getFullYear()} BNCC. All rights reserved.
         </footer>
      </div>
   );
};

export default App;
