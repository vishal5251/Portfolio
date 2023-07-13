import React from 'react'

function Footer() {
  return (
    <div className='snap-start'>
      {/* <footer class="bg-white rounded-t-lg shadow dark:bg-gray-900 "> */}
      <footer class="rounded-t-lg shadow bg-gray-900 ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#home" class="flex items-center mb-4 sm:mb-0">
              <img src="https://cdn.cdnlogo.com/logos/s/43/susy.svg" class="h-8 mr-3" alt="My Logo" />
              {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shweta Rai</span> */}
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white ">Shweta Rai</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#home" class="mr-4 hover:underline md:mr-6 ">Home</a>
              </li>
              <li>
                <a href="#about" class="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                <a href="#project" class="mr-4 hover:underline md:mr-6">Project</a>
              </li>
              <li>
                <a href="/blog" class="mr-4 hover:underline md:mr-6 ">Blog</a>
              </li>
              <li>
                <a href="#contact" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="flex my-4 space-x-5 sm:justify-center md:mt-0">
            <a href="https://github.com/gitshwetarai" class="text-gray-400 hover:text-gray-500 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.linkedin.com/in/shweta-rai-370312203/" class="underline">Shweta Rai</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </div>
  )
}

export default Footer