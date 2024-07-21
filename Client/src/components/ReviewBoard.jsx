import React from 'react';

const ReviewBoard = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md m-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">OUR REVIEW BOARD</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
          <img src="https://www.verywellmind.com/thmb/V-ughpr6HaErjm965-iLR-V967o=/87x87/filters:no_upscale():max_bytes(150000):strip_icc()/steven-gans-1000-51582b7f23b6462f8713961deb74959f.jpg" alt="Steven Gans, MD" className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h3 className="text-lg font-bold text-blue-800">Steven Gans, MD</h3>
            <p className="text-gray-600">Psychiatrist</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
          <img src="https://www.verywellmind.com/thmb/zLkG5rDNj9pVE4iMm-TzEL0Hh5k=/87x87/filters:no_upscale():max_bytes(150000):strip_icc()/block-8924ca72ff94426d940e8f7e639e3942.jpg" alt="Daniel B. Block, MD" className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h3 className="text-lg font-bold text-blue-800">Daniel B. Block, MD</h3>
            <p className="text-gray-600">Psychiatrist</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
          <img src="https://www.verywellmind.com/thmb/n6eFVK2XQebXGirXzMDQ9LZrVPM=/87x87/filters:no_upscale():max_bytes(150000):strip_icc()/akeemmarsh_1000-d247c981705a46aba45acff9939ff8b0.jpg" alt="Akeem Marsh, MD" className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h3 className="text-lg font-bold text-blue-800">Akeem Marsh, MD</h3>
            <p className="text-gray-600">Child, Adolescent, and Adult Psychiatrist</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
          <img src="https://www.verywellmind.com/thmb/3jKiWaqZgW8oqiisNdQLcGiYqHc=/87x87/filters:no_upscale():max_bytes(150000):strip_icc()/Sara-Clark-1000-ec845b3e32314f9782370ec43ea68e82.jpg" alt="Sara Clark" className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h3 className="text-lg font-bold text-blue-800">Sara Clark</h3>
            <p className="text-gray-600">Mindfulness Teacher</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
          <img src="https://www.verywellmind.com/thmb/ZgeW37AcI2ucF1VrLhQYXaCY34I=/87x87/filters:no_upscale():max_bytes(150000):strip_icc()/carly-935717a415724b9b9c849c26fd0450ea.jpg" alt="Carly Snyder, MD" className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h3 className="text-lg font-bold text-blue-800">Carly Snyder, MD</h3>
            <p className="text-gray-600">Psychiatrist</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
          <img src="https://www.verywellmind.com/thmb/h5MMllmTdDPDC-JIMlbRqMMtht0=/87x87/filters:no_upscale():max_bytes(150000):strip_icc()/Shaheen-Lakhan-660-594fd00c787a40e2bcf15a60eaf9b89a.jpg" alt="Shaheen Lakhan, MD, PhD" className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h3 className="text-lg font-bold text-blue-800">Shaheen Lakhan, MD, PhD</h3>
            <p className="text-gray-600">Neurologist</p>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-100 rounded-lg">
        <p className="text-blue-800 text-lg">Our team of board-certified physicians and other mental health professionals ensures our content is accurate, up-to-date, and inclusive.</p>
        <button className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
          MEET THE TEAM →
        </button>
      </div>
    </div>
  );
};

export default ReviewBoard;
