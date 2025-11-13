function Footer() {
  return (
    <>
      <section className="w-full py-16 m-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          <div>
            <img
              src="https://green-shop-otabek.vercel.app/assets/1-Ctm6W3Jq.png"
              alt="Garden Care"
            />
            <h2 className="text-lg font-semibold mb-1">Garden Care</h2>
            <p className="text-gray-600 text-sm">
              We are an online plant shop offering a wide <br /> range of cheap
              and trendy plants.
            </p>
          </div>

          <div>
            <img
              src="https://green-shop-otabek.vercel.app/assets/2-BF1Oo3xK.png"
              alt="Plant Renovation"
            />
            <h2 className="text-lg font-semibold mb-1">Plant Renovation</h2>
            <p className="text-gray-600 text-sm">
              We are an online plant shop offering a wide range <br /> of cheap
              and trendy plants.
            </p>
          </div>
          <div>
            <img
              src="https://green-shop-otabek.vercel.app/assets/3-Bi-spicH.png"
              alt="Watering Garden"
            />
            <h2 className="text-lg font-semibold mb-1">Watering Garden</h2>
            <p className="text-gray-600 text-sm">
              We are an online plant shop offering a wide range <br /> of cheap
              and trendy plants.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">
              Would you like to join newsletters?
            </h2>

            <div className="flex mb-3">
              <input
                type="text"
                placeholder="enter your email address..."
                className="border border-gray-300 rounded-l-lg px-3 py-2 w-full outline-none text-sm"
              />
              <button className="bg-green-600 text-white px-5 py-2 rounded-r-lg text-sm font-medium hover:bg-green-700 transition">
                Join
              </button>
            </div>

            <p className="text-gray-600 text-sm">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                My Account
              </h2>
              <ul className="text-gray-500 font-medium *:hover:text-[#46a358] *:cursor-pointer">
                <li className="mb-4">About</li>
                <li className="mb-4">Careers</li>
                <li className="mb-4">Brand Center</li>
                <li className="mb-4">Blog</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Help & Guide
              </h2>
              <ul className="text-gray-500 font-medium *:hover:text-[#46a358] *:cursor-pointer">
                <li className="mb-4">Discord Server</li>
                <li className="mb-4">Twitter</li>
                <li className="mb-4">Twitter</li>
                <li className="mb-4">Contact Us</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Categories
              </h2>
              <ul className="text-gray-500 font-medium *:hover:text-[#46a358] *:cursor-pointer">
                <li className="mb-4">Privacy Policy</li>
                <li className="mb-4">Licensing</li>
                <li className="mb-4"> Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Download
              </h2>
              <ul className="text-gray-500 font-medium *:hover:text-[#46a358] *:cursor-pointer">
                <li className="mb-4">iOS</li>
                <li className="mb-4">Android</li>
                <li className="mb-4">We accept</li>
                <img
                  src="https://green-shop-otabek.vercel.app/assets/payment-CJ6HT73w.png"
                  alt=""
                />
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 md:flex md:items-center md:justify-between border-t border-gray-200">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2025 GreenShop. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
