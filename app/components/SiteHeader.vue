<template>
  <header class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">

        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="text-2xl font-bold">BimmerTech</a>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-8">
          <a href="#" class="hover:text-gray-300">Home</a>
          <a href="#" class="hover:text-gray-300">About</a>
          <a href="#" class="hover:text-gray-300">Services</a>
          <a href="#" class="hover:text-gray-300">Contact</a>
        </nav>

        <!-- CTA Button -->


        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button class="text-gray-300 hover:text-white focus:outline-none">
            <!-- Heroicon Menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

</template>